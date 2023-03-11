import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Reel from '../pages/Reel'


const Router = () => {
  return (
   <BrowserRouter>

    <Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/reel" element={<Reel />}/>
    </Routes>

   </BrowserRouter>
  )
}

export default Router