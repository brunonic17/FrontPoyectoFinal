import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './products.css'
import { RouterProducts } from '../routerProducts'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProducts />
  </React.StrictMode>
)