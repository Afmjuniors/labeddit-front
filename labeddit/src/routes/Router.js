import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'
import SignUp from '../pages/SignUp'
import PageNotFound from '../pages/PageNotFound'
import Feed from '../pages/Feed'


const Router = () => {
  return (
   <BrowserRouter>

    <Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/feed/:id" element={<Feed />}/>
    </Routes>

   </BrowserRouter>
  )
}

export default Router