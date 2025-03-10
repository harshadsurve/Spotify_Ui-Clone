
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for Bootstrap JS components
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
