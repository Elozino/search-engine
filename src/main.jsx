import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextAPI from './context/ContextAPI'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContextAPI>
        <App />
      </ContextAPI>
    </Router>
  </React.StrictMode>
)
