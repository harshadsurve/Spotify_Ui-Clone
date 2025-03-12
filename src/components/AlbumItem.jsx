import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate(); // Corrected the variable name to `navigate`

  return (
    <div 
      className="card" 
      style={{ width: '12rem', cursor: 'pointer', backgroundColor: 'black' }} 
      onClick={() => navigate(`/album/${id}`)} // Correct usage of navigate
    >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>
          {name}
        </h5>
        <p className="card-text" style={{ color: 'white' }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default AlbumItem;
