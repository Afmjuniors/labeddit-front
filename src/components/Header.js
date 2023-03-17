import closeIcon from "../assets/images/exit-icon.svg"
import logoIcon from "../assets/images/logo-icon.svg"
import React, { useContext, useEffect, useState } from 'react'
import "../styles.css"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goToFeed, goToHomePage } from "../routes/coordinator"
import { GlobalContext } from "../context/GlobalContext"

const Header = () => {
  const navigate = useNavigate()
  const {isLogged} = useContext(GlobalContext)
  const location = useLocation()
  const params = useParams()

  return (
      <>
      {location.pathname ==="/" ||
    <header className="header-contaneiner">
      {
        params.id?
        <img onClick={()=>{
          goToFeed(navigate)
          window.location.reload()
        }} className="exit-icon icon" src={closeIcon} alt="Exit"/>:
        <img className="exit-icon icon" src="" alt=""/>
      }
        <img className="logo-icon icon" src={logoIcon} alt="Logo Icon"/>
        { isLogged?
          <p onClick={()=>{
            goToHomePage(navigate)
            localStorage.removeItem('token')
          }}>Logout</p>:        
          <p onClick={()=>goToHomePage(navigate)}>Entrar</p> 
        }
    </header>
    }
    </>
  )
}

export default Header