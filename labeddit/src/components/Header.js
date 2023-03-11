import closeIcon from "../assets/images/exit-icon.svg"
import logoIcon from "../assets/images/logo-icon.svg"
import React, { useState } from 'react'
import "../styles.css"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { goToHomePage } from "../routes/coordinator"

const Header = () => {
  const navigate = useNavigate()
  const  [isLogged, setIsLogged] = useState(false)
  const location = useLocation()
  const params = useParams()
  return (
      <>
      {location.pathname ==="/" ||
    <header className="header-contaneiner">
      {
        params.id?
        <img className="exit-icon icon" src={closeIcon} alt="Exit"/>:
        <img className="exit-icon icon" src="" alt=""/>
      }
        <img className="logo-icon icon" src={logoIcon} alt="Logo Icon"/>
        { isLogged?
          <p>Logout</p>:        
          <p onClick={()=>goToHomePage(navigate)}>Entrar</p>      

        }
    </header>
    }
    </>
  )
}

export default Header