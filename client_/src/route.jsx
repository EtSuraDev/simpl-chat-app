import React from 'react'
// import Home from "./pages/home"
// import Login from "./pages/login"
// import Signup from "./pages/signup"

import Login from './signup_login/login'
import Signup from './signup_login/signup'
import Components from './components'
import { Routes, Route } from 'react-router'

function RoutesPath() {
  return (
    <Routes>
        <Route path='/' >
            <Route index element={<Components/>} ></Route>
            <Route path='home' element={<Components/>} ></Route>
            <Route path='signup' element={<Signup/>} ></Route>
            <Route path='login' element={<Login/>} ></Route>
        </Route>
    </Routes>
  )
}

export default RoutesPath