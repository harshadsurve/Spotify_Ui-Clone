import React, { useContext } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <NavBar />
      <div className="mt-5 d-flex flex-column flex-md-row align-items-md-end gap-4 text-white">
        <img className="w-25 rounded" src={albumData.image} alt="" />
        <div className="d-flex flex-column">
          <p>Playlist</p>
          <h2 className="fs-1 fw-bold mb-3">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-2">
            <img className="inline-block" style={{width:"20px"}} src={assets.spotify_logo} alt="" />
            <b>Spotify</b>
            • 1,447,382 likes
            • <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className="row mt-4 mb-4 px-2 text-white">
        <div className="col-3"><b>#</b>Title</div>
        <div className="col-3">Album</div>
        <div className="col-3 d-none d-sm-block">Date Added</div>
        <div className="col-3 text-center">
          <img className="mx-auto " style={{width:"20px"}} src={assets.clock_icon} alt="" />
        </div>
      </div>
      <hr />
      {
        songsData.map((item, index) => (
          <div 
            onClick={() => playWithId(item.id)} 
            key={index} 
            className="row p-2 align-items-center text-white hover-bg-light cursor-pointer"
          >
            <div className="col-3 text-white">
              <b className="me-3">{index + 1}</b>
              <img className="d-inline-block w-25 me-3" src={item.image} alt="" />
              {item.name}
            </div>
            <div className="col-3">{albumData.name}</div>
            <div className="col-3 d-none d-sm-block">5 days ago</div>
            <div className="col-3 text-center">{item.duration}</div>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum;
