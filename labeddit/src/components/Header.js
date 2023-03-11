import closeIcon from "../assets/images/exit-icon.svg"
import logoIcon from "../assets/images/logo-icon.svg"
import React from 'react'

const Header = () => {
  return (
    <header>
        <img src={closeIcon} alt="Exit"/>
        <img src={logoIcon} alt="Logo Icon"/>
        <p>Entrar</p>        
    </header>
  )
}

export default Header