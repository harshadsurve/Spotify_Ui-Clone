import Player from "./components/Player";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className='vh-100  bg-black'>
        <div className="container-fluid row " style={{ height: "87%" }}>
          <SideBar />
        </div>
        <Player />
    </div>
  );
}

export default App;
