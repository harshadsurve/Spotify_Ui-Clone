import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

 const SideBar = () => {
    const navigate = useNavigate()
  return (
   <div className='col-3  d-none d-lg-flex flex-column p-2 gap-2 text-white '>
    <div className='bg-dark h-25 rounded  d-flex flex-column justify-content-around'>
        <div  onClick={()=>navigate('/')} className="d-flex align-items-center gap-3 ps-3 cursor-pointer">
            <img style={{ height: "30px" }} src={assets.home_icon} alt="Home Icon" />
            <p className="fw-bold fs-4 fs-lg-2 d-flex align-items-center m-0">Home</p>
        </div>
        <div className="d-flex align-items-center gap-3 ps-3 cursor-pointer">
            <img style={{ height: "30px" }} src={assets.search_icon} alt="Search Icon" />
            <p className="fw-bold fs-4 fs-lg-2 d-flex align-items-center m-0">Search</p>
        </div>
    </div>
    <div className='bg-dark h-100 rounded'>
        <div className='p-2 d-flex align-items-center justify-content-between mb-2'>
            <div className='d-flex align-items-center gap-3 '>
                <img style={{width:"30px"}} src={assets.stack_icon} alt="" />
                <p className="fw-bold fs-4 fs-lg-2 d-flex align-items-center m-0">Your Library</p>
            </div>
            <div className='d-flex align-items-center gap-3 '>
            <img style={{width:"20px"}} src={assets.arrow_icon} alt="" />
            <img style={{width:"20px"}} src={assets.plus_icon} alt="" />
            </div>
        </div>
        <div className='p-1 bg-secondary  rounded fw-semibold  d-flex flex-column align-items-start justify-content-start   mb-2'>
            <h4>Create Your First Playlist</h4>
            <p>it's easy we will help you</p>
            <button type="button" className="btn  btn-light p-1 rounded-pill">Create playlist</button>
        </div>
        <div className='p-1 bg-secondary   rounded fw-semibold  d-flex flex-column align-items-start justify-content-start '>
            <h4>Let's findsome prodcasts to follow </h4>
            <p>we'll keep you update on new episodes</p>
            <button type="button" className="btn  btn-light p-1 rounded-pill">Browse prodcasts</button>
        </div>
    </div>
   </div>
  )
}

export default SideBar