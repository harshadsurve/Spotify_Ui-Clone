import React from 'react'
import NavBar from './NavBar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <NavBar />
      
      {/* Featured Charts Section */}
      <div className="container  mb-4">
        <h1 className="my-5 fw-bold fs-2">Featured Charts</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {albumsData.map((item, index) => (
            <div key={index} className="col">
              <AlbumItem 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="container  mb-4">
        <h1 className="my-5 fw-bold fs-2">Today's Biggest Hits</h1>
        <div className="d-flex row-cols-md-3">
          {songsData.map((item, index) => (
            <div key={index} className="col">
              <SongItem 
                name={item.name} 
                desc={item.desc} 
                id={item.id} 
                image={item.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome;
