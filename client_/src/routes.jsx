import React from 'react'
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import { Routes, Route } from 'react-router'

function RoutesPath() {
  return (
    <Routes>
        <Route path='/' >
            <Route index element={<Home/>} ></Route>
            <Route path='home' element={<Home/>} ></Route>
            <Route path='signup' element={<Signup/>} ></Route>
            <Route path='login' element={<Login/>} ></Route>
        </Route>
    </Routes>
  )
}

export default RoutesPath
