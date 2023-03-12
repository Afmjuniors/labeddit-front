import React, { useContext, useState } from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { BASE_URL } from '../constants/baseUrl'
import axios from 'axios'
import { regexEmail, regexPassword } from '../constants/regex'
import {  useNavigate } from 'react-router-dom'
import { goToFeed, goToSignUp } from '../routes/coordinator'
import { CircularProgress } from '@mui/material'
import { GlobalContext } from '../context/GlobalContext'


const HomePage = () => {
  const navigate = useNavigate()
  const {isLogged, setIsLogged} = useContext(GlobalContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const validation = () => {
    if (!email.match(regexEmail)) {
      window.alert('Deve ser um email valido')
      setIsValid(false)
    }
    if (!password.match(regexPassword)) {
      window.alert('Deve ser um password valido: conter pelo menos 1 letra Maiuscula, 1 letra minuscula, 1 caracter especial, 1 numero e ter de 8 a 12 caracteres')
      setIsValid(false)
    }
    if (password.match(regexPassword) && email.match(regexEmail)) {
      setIsValid(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password
    }
    if (isValid) {
      sendRequestLogin(userLogin)
    }
    setEmail('')
    setPassword('')
  }


  const sendRequestLogin = async (userLogin) => {
    try {
      setIsLoading(true)
      const response = await axios.post(`${BASE_URL}/users/login`, userLogin)
      localStorage.setItem('token', response.data.token)
      setIsLogged(true)
      setIsLoading(false)
      goToFeed(navigate)

    } catch (error) {
      setIsLoading(false)
      console.log(error)

      if(error.response.status===404){
        window.alert("Email ou senha invalida")

      }
    }
  }

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            type="text"
            id='input-form'
            label="E-mail"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required />
          <TextField
            type="password"
            id='input-form'
            label="Senha"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required />
          <button onClick={validation} className='btn'>
            {isLoading ?
              <CircularProgress color="inherit"/> :
              <span>Continuar</span>
            }
          </button>
        </form>
        <div className='line'></div>
      </div>
      <div className='signup-btn'>
        <button onClick={()=>goToSignUp(navigate)} type='submit'  className='btn btn-white'>Crie uma conta!</button>
      </div>


    </Layout>

  )
}

export default HomePage