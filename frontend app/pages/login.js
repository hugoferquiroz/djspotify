import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://raw.githubusercontent.com/hugoferquiroz/djspotify/main/reports/figures/logos/i3.jpg" alt="Spotify logo" />
      
      <section id="names-section">
    <h2> <center> Developers </center></h2>
    <ul>
      <li>Cesar Quezada</li>
      <li>Hugo Fernandez</li>
      <li>Jack Cruz</li>
      <li>Walter Peña</li>
    </ul>
  </section>

    <p>This virtual DJ creates playlists based on your preferences as well as those of your friends. It utilizes artificial intelligence and the Spotify API to curate personalized playlists.</p>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl:"/"})}>
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}