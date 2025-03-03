import React from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  console.log(songsData); // Check if songsData is being imported correctly

  return (
    <div className='bg-black d-flex align-items-center justify-content-between text-white px-2'>
      <div className='d-none d-lg-flex align-items-center gap-2'>
        <img style={{ width: 50 }} src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 15)}</p>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center gap-1 m-auto'>
        <div className='d-flex gap-4'>
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.prev_icon} alt="" />
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.play_icon} alt="" />
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.next_icon} alt="" />
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='d-flex align-items-center gap-4' style={{width:"300px"}}>
          <p>1:06</p>
          <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
  <div className="progress-bar bg-success" style={{width: "1%"}}></div>
</div>
          <p>3:20</p>
        </div>
      </div>
      <div className='d-none d-lg-flex align-items-center gap-2 opacity-75'>
          <img style={{width:20}} src={assets.plays_icon} alt="" />
          <img style={{width:20}}  src={assets.mic_icon} alt="" />
          <img style={{width:20}}  src={assets.queue_icon} alt="" />
          <img style={{width:20}}  src={assets.speaker_icon} alt="" />
          <img style={{width:20}}  src={assets.volume_icon} alt="" />
          <div className='bg-white rounded' style={{height:10, width:60}}></div>
          <img style={{width:20}}  src={assets.mini_player_icon} alt="" />
          <img style={{width:20}}  src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

export default Player;
