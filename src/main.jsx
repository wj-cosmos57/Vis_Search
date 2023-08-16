import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Viewer from './pages/Viewer'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    // <Viewer />
  // </React.StrictMode>,
)
