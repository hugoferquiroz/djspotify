import { tracksState } from '@/atoms/playlistAtom';
import React from 'react'
import { useRecoilValue } from 'recoil'
import Song from './Song';

function Songs() {
  const tracks = useRecoilValue(tracksState);

  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {
        tracks?.map((track, i) => (
          <Song key={i} track={track} order={i}/>
        ))
      }    
    </div>
  )
}

export default Songs