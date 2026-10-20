import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login.jsx'
import Home from '../Pages/Home.jsx'

 const AppRoutes = () => {
  return (
    <Routes>
       
        <Route path='/' element={<Home/>}/>
    </Routes>
  
  )
}
export default AppRoutes;