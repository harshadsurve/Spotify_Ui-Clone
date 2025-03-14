import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const ablumId = isAlbum ? location.pathname.slice(-1) : "" ;
  const bgColor = albumsData[Number(ablumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div 
      ref={displayRef} 
      className='w-100 m-2 px-6 pt-4 rounded bg-black text-white overflow-auto  w-lg-75 ml-lg-0'
      style={{ maxHeight: '80vh' }}  // Adjust max-height here to make the section scrollable
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display;
