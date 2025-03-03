import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Optional, for Bootstrap JS components

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
