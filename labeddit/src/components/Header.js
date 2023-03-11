import closeIcon from "../assets/images/exit-icon.svg"
import logoIcon from "../assets/images/logo-icon.svg"
import React from 'react'
import "../styles.css"

const Header = () => {
  return (
    <header className="header-contaneiner">
        <img className="exit-icon icon" src={closeIcon} alt="Exit"/>
        <img className="logo-icon icon" src={logoIcon} alt="Logo Icon"/>
        <p>Entrar</p>        
    </header>
  )
}

export default Header