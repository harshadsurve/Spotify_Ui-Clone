import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className="d-flex justify-content-between align-items-center font-weight-semibold">
            <div className="d-flex align-items-center gap-2">
                <img onClick={() => navigate(-1)} className="w-25 bg-dark p-2 rounded-circle cursor-pointer" src={assets.arrow_left} alt="" />
                <img onClick={() => navigate(1)} className="w-25 bg-dark p-2 rounded-circle cursor-pointer" src={assets.arrow_right} alt="" />
            </div>
            <div className="d-flex align-items-center gap-4">
                <p className="bg-white text-dark px-2 py-1 rounded-3 text-sm d-none d-md-block cursor-pointer">Explore Premium</p>
                <p className="bg-dark text-light py-1 px-3 rounded-3 text-sm cursor-pointer">Install App</p>
                <p className="bg-purple text-dark w-25 h-25 rounded-circle d-flex align-items-center justify-content-center">H</p>
            </div>
        </div>
        <div className="d-flex align-items-center gap-2 mt-3">
            <p className="bg-white text-dark px-4 py-1 rounded-3 cursor-pointer">All</p>
            <p className="bg-dark text-light px-4 py-1 rounded-3 cursor-pointer">Music</p>
            <p className="bg-dark text-light px-4 py-1 rounded-3 cursor-pointer">Podcasts</p>
        </div>
    </>
  )
}

export default NavBar