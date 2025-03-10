import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div 
      onClick={() => playWithId(id)} 
      className="card" 
      style={{ width: '18rem', cursor: 'pointer' }}
    >
      <img className="card-img-top rounded" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted small">{desc}</p>
        <button className="btn btn-primary">Play</button>
      </div>
    </div>
  )
}

export default SongItem;
