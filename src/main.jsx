import React from 'react'
import ReactDOM from 'react-dom/client'
import Admin from './PagesAdmin/PageAdmin.jsx'
import {EditProvider} from "./ContextAdmin/EditContext.jsx"
import { BrowserRouter,Route,Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <EditProvider>
    <BrowserRouter>
      <Routes>
       
    <Route path="Admin" element={<Admin/>}></Route>
     
    </Routes>
    </BrowserRouter>
    </EditProvider>
  </React.StrictMode>
)
