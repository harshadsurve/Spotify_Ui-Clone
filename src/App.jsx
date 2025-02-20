import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className='vh-100  bg-black'>
        <div className="container-fluid row " style={{ height: "90%" }}>
          <SideBar />
        </div>
    </div>
  );
}

export default App;
