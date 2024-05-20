import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { ShoppingRender } from './ShoppingF.jsx'

ReactDOM.createRoot(document.getElementById('rootShopping')).render(
  <React.StrictMode>
    <ShoppingRender />
  </React.StrictMode>,
)
