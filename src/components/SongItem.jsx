import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div 
      onClick={() => playWithId(id)} 
      className="card" 
      style={{ width: '12rem', cursor: 'pointer', backgroundColor: 'black' }}
    >
      <img className="card-img-top rounded" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>
          {name}
        </h5>
        <p className="card-text small" style={{ color: 'white' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default SongItem;
