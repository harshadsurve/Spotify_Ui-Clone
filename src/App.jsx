import Player from "./components/Player";
import React, { useContext } from 'react'
import SideBar from "./components/SideBar"
import Display from "./components/Display";
import { PlayerContext } from './context/PlayerContext'


function App() {
  const {audioRef,track}= useContext(PlayerContext);
  return (
    <div className='vh-100  bg-black'>
        <div className="container-fluid d-flex " style={{ height: "87%" }}>
          <SideBar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
}

export default App;
