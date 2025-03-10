import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigation = useNavigate();
  return (
    <div className="card" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => navigate(`/album/${id}`)}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  )
}

export default AlbumItem;
