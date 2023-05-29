from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for, jsonify, make_response
)
from werkzeug.exceptions import abort

from flaskr.db import get_db
import pandas as pd
import json
from json import JSONEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import linear_kernel
import numpy as np
from flask_cors import cross_origin

# Funciones de codificando bits
def compute_cossim(top_tracks_df, candidates_df):
    '''Calcula la similitud del coseno entre cada top_track y cada pista
    candidata en candidates_df. Retorna matriz de n_top_tracks x n_candidates_df'''
    top_tracks_mtx = top_tracks_df.iloc[:,1:].values
    candidates_mtx = candidates_df.iloc[:,1:].values

    # Estandarizar cada columna de features: mu = 0, sigma = 1
    scaler = StandardScaler()
    top_tracks_scaled = scaler.fit_transform(top_tracks_mtx)
    can_scaled = scaler.fit_transform(candidates_mtx)

    # Normalizar cada vector de características (magnitud resultante = 1)
    top_tracks_norm = np.sqrt((top_tracks_scaled*top_tracks_scaled).sum(axis=1))
    can_norm = np.sqrt((can_scaled*can_scaled).sum(axis=1))

    n_top_tracks = top_tracks_scaled.shape[0]
    n_candidates = can_scaled.shape[0]
    top_tracks = top_tracks_scaled/top_tracks_norm.reshape(n_top_tracks,1)
    candidates = can_scaled/can_norm.reshape(n_candidates,1)

    # Calcular similitudes del coseno
    cos_sim = linear_kernel(top_tracks,candidates)

    return cos_sim

def content_based_filtering(pos, cos_sim, ncands, umbral = 0.8):
    '''Dada una pista de top_tracks (pos = 0, 1, ...) extraer "ncands" candidatos,
    usando "cos_sim" y siempre y cuando superen un umbral de similitud'''

    # Obtener todas las pistas candidatas por encima del umbral
    idx = np.where(cos_sim[pos,:]>=umbral)[0] # ejm. idx: [27, 82, 135]

    # Y organizarlas de forma descendente (por similitudes de mayor a menor)
    idx = idx[np.argsort(cos_sim[pos,idx])[::-1]]

    # Si hay más de "ncands", retornar únicamente un total de "ncands"
    if len(idx) >= ncands:
        cands = idx[0:ncands]
    else:
        cands = idx

    return cands

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def _corsify_actual_response(response):
    return response

# App flask 

bp = Blueprint('dj_spotify', __name__)

@bp.route('/')
@cross_origin()
def index():
    cur = get_db().cursor()
    cur.execute(
        'SELECT user, id, acousticness, danceability, duration_ms, energy, instrumentalness, key, liveness, loudness, mode, speechiness, tempo, valence'
        ' FROM tracks'
    )
    r = [dict((cur.description[i][0], value) \
         for i, value in enumerate(row )) \
         for row in cur.fetchall()]
    return jsonify(r)

@bp.route('/track', methods=['GET'])
def get_tracks():
    user = request.args.get("user")
    print('user:', user)

    cur = get_db().cursor()
    cur.execute(
        'SELECT user, id, acousticness, danceability, duration_ms, energy, instrumentalness, key, liveness, loudness, mode, speechiness, tempo, valence'
        ' FROM tracks'
        ' WHERE user = ?',
        (user,)
    )

    r = [dict((cur.description[i][0], value) \
         for i, value in enumerate(row )) \
         for row in cur.fetchall()]
    return jsonify(r)

@bp.route('/track', methods=['POST', 'OPTIONS'])
@cross_origin()
def add_track():
    print('metdd: ', request.method)
    if request.method == "OPTIONS": # CORS preflight
        return _build_cors_preflight_response()
    elif request.method == "POST":  # Actual request following the preflight
        track = request.get_json()
        print(track)

        db = get_db()
        db.execute('INSERT INTO tracks (user, id, acousticness, danceability, duration_ms, energy, instrumentalness, key, liveness, loudness, mode, speechiness, tempo, valence)'
                   ' VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                   (track['user'], track['id'], track['acousticness'], track['danceability'], track['duration_ms'], track['energy'], track['instrumentalness'], track['key'], track['liveness'], track['loudness'], track['mode'], track['speechiness'], track['tempo'], track['valence']))
        db.commit()
        return _corsify_actual_response(jsonify(track))
    
    else:
        raise RuntimeError("Weird - don't know how to handle method {}".format(request.method))

@bp.route('/prediction')
@cross_origin()
def get_prediction():
    user = request.args.get("user")

    # Connect to the SQLite database
    conn = get_db()

    # Query the data from the database and store it in a DataFrame
    # Obtener el dataframe del DMC (base de datos) -> (candidates_df)
    query = "SELECT id, acousticness, danceability, duration_ms, energy, instrumentalness, key, liveness, loudness, mode, speechiness, tempo, valence FROM tracks WHERE user = 'root'"
    candidates_df = pd.read_sql_query(query, conn)

    # Obtener el dataframe del usuario -> (top_tracks_df) // Corregir
    query = f"SELECT id, acousticness, danceability, duration_ms, energy, instrumentalness, key, liveness, loudness, mode, speechiness, tempo, valence FROM tracks WHERE user = '{user}'"
    top_tracks_df = pd.read_sql_query(query, conn)
     
    # Prediction
    cos_sim = compute_cossim(top_tracks_df, candidates_df)

    # Crear listado de ids con las recomendaciones
    ids_top_tracks = []
    ids_playlist = []

    for i in range(top_tracks_df.shape[0]):
        ids_top_tracks.append(top_tracks_df['id'][i])

        # Obtener listado de candidatos (5) para esta pista
        cands = content_based_filtering(i, cos_sim, 5, umbral=0.7)

        # Si hay pistas relacionadas obtener los ids correspondientes
        if len(cands)==0:
            continue
        else:
            for j in cands:
                id_cand = candidates_df['id'][j]
                ids_playlist.append(id_cand)

    # Eliminar candidatos que ya están en top-tracks
    ids_playlist_dep = [x for x in ids_playlist if x not in ids_top_tracks]

    # Y eliminar posibles repeticiones
    ids_playlist_dep = list(set(ids_playlist_dep))

    # retornar la predicción
    return jsonify(ids_playlist_dep)



