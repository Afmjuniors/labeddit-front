import React from 'react'
import "../styles.css"
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'

const HomePage = () => {
  return (
    <Layout>
      <div className='wrapper-greetings'>
        <img className="logo-full" src={logoFull} alt="LabEddit Logo" />
        <div className='subtitles'>
          <p>O projeto de rede social da Labenu</p>
          <p>Feito por Alexandre Machado</p>
        </div>
      </div>
      <div className="form-wrapper">
        <form>
          <TextField type="text" id='input-form' label="E-mail" variant="outlined" required />
          <TextField type="password" id='input-form' label="Senha" variant="outlined" required />
          <button className='btn'> Continuar</button>
        </form>
        <hr></hr>
      </div>
        <div className='signup-btn'>
          <button className='btn btn-white'>Crie uma conta!</button>
        </div>


    </Layout>

  )
}

export default HomePage