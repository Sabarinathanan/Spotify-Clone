import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import SongItems from './SongItems'
import AlbumItems from './AlbumItems'

const DisplayHome = () => {
  return (
    <div>
        {/* navbar  */}
        <Navbar/>
        {/* display  */}
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>
                {albumsData.map((item,index)=>(<AlbumItems key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's Biggest hits</h1>
            <div className='flex overflow-auto'>
                {songsData.map((item,index)=>(<SongItems key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>))}
            </div>
        </div>
    </div>
  )
}

export default DisplayHome