import { currentTrackIdState, isPlayingState } from '@/atoms/songAtom';
import useSongInfo from '@/hooks/useSongInfo';
import useSpotify from '@/hooks/useSpotify';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';

import {
  HeartIcon,
  SpeakerWaveIcon as VolumeDownIcon,
} from  '@heroicons/react/24/solid';
import { 
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  PlayPauseIcon,  // Replay Icon
  BackwardIcon, // rewind
  SpeakerWaveIcon,  // volum up
  ArrowsRightLeftIcon, // switch horizontal icon
} from '@heroicons/react/24/outline';
import { debounce } from 'lodash';


function Player() {
  const spotifyApi = useSpotify();  
  const { data: session, status } = useSession();
  const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState);
  const [ isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [ volume, setVolume ] = useState(50);

  const songInfo = useSongInfo();
  
  const fetchCurrentSongInfo = () => {
    if(!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then(data => {
        setCurrentTrackId(data.body?.item?.id);
        
        spotifyApi.getMyCurrentPlaybackState().then(data => {
          setIsPlaying(data.body?.is_playing);
        })
      })
      
    }
  }

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlayingTrack().then(data => {
      if(data.body.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      }
      else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    })
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId){
      // fetch song info
      fetchCurrentSongInfo();
      setVolume(50);
    }
  }, [currentTrackId, spotifyApi, session])

  useEffect(() => {
    if (volume > 0 && volume <= 100) {
      debounceAdjustVolume(volume);
    }
  }, [volume])

  const debounceAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch(err => {});
    }, 500), [])

  return (
    <div className='h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-col-3 text-xs-md:text-base px-2 md:px-8'>
      {/* Left */}
      <div className='flex items-center space-x-4'>
        <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt="" />
        <div>
          <h1>{songInfo?.name}</h1>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>

      {/* Middle */}
      <div className='flex items-center justify-evenly'>
        <ArrowsRightLeftIcon className="button" />
        <BackwardIcon className="button" />

        {
          isPlaying ? (
            <PauseIcon onClick={handlePlayPause} className="button w-10 h-10" />
          ) : (
            <PlayIcon onClick={handlePlayPause} className="button w-10 h-10" />
          )
        }
        <ForwardIcon className='button' />
        <PlayPauseIcon className='button' />
      </div>

      {/* Right */}
      <div className='flex items-center space-x-3 md:space-x-4 justify-end pr-5'>
        <SpeakerWaveIcon onClick={() => volume > 0 && setVolume(volume-10)} className='button' />
        <input className="w-14 md:w-28" 
          type="range" 
          value={volume}
          onChange={e => setVolume(Number(e.target.value))} 
          min={0} 
          max={100} />
        <VolumeDownIcon onClick={() => volume < 100 && setVolume(volume+10)}className='button' />
      </div>
    </div>
  )
}

export default Player