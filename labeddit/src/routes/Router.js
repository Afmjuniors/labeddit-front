import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'
import PageNotFound from '../pages/PageNotFound'


const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<HomePage />}/>

    </Routes>

   </BrowserRouter>
  )
}

export default Router