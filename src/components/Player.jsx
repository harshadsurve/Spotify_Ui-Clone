import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext'


const Player = () => {
  const {seekBg,seekBar,playStatus,play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext);

  return (
    <div className='bg-black d-flex align-items-center justify-content-between text-white px-2'>
      <div className='d-none d-lg-flex align-items-center gap-2'>
        <img style={{ width: 50 }} src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 15)}</p>
        </div>
      </div>
      <div className='d-flex flex-column align-items-center gap-1 m-auto'>
        <div className='d-flex gap-4'>
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} style={{ height: "20px" }} className='cursor-pointer' src={assets.prev_icon} 
          alt="" />
           {
            playStatus ? <img onClick={pause} 
            style={{ height: "20px" }}
            className='cursor-pointer' src={assets.pause_icon} alt="" />
            :
            <img onClick={play} 
            style={{ height: "20px" }}
            className='cursor-pointer' src={assets.play_icon} alt="" />
        }
          <img onClick={next} style={{ height: "20px" }} className='cursor-pointer' src={assets.next_icon} alt="" />
          <img style={{ height: "20px" }} className='cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='d-flex align-items-center gap-4' style={{width:"300px"}}>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={seekSong}  className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
         <div className="progress-bar bg-success" ref={seekBar} ></div>
      </div>
      <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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
