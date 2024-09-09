import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AltaProductos.jsx'
import './index.css'
import {EditProvider} from "./fetch/EditContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditProvider>
    <App />
    </EditProvider>
  </React.StrictMode>,
)
