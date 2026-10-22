import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login.jsx'
import Home from '../Pages/Home.jsx'
import SignUp from '../Pages/SignUp.jsx'

 const AppRoutes = () => {
  return (
    <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  
  )
}
export default AppRoutes;