import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './PagesAdmin/PageAdmin.jsx'
// import AltaProducts from './ComponentAdmin/AltaProductos.jsx'
import {EditProvider} from "./ContextAdmin/EditContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditProvider>
    <Admin/>
    {/* <AltaProducts/> */}
    </EditProvider>
  </React.StrictMode>,
)
