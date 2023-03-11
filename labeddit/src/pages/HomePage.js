import React, { useState } from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { BASE_URL } from '../constants/baseUrl'
import axios from 'axios'
import { regexEmail, regexPassword } from '../constants/regex'
import { useLocation } from 'react-router-dom'


const HomePage = () => {
  const [email, setEmail]=useState('')
  const [password,setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const location = useLocation()

  const validation = () =>{
    if(!email.match(regexEmail)){
      window.alert('Deve ser um email valido')
      setIsValid(false)
    }
    if(!password.match(regexPassword)){
      window.alert('Deve ser um email valido')
      setIsValid(false)
    }
    if(password.match(regexPassword) && email.match(regexEmail)){
      setIsValid(true)
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    validation()
    const userLogin = {
      email,
      password
    }
    if(isValid){
      sendRequestLogin(userLogin)
    }
  }
  

  const sendRequestLogin =async (userLogin)=>{
    try {
      setIsLoading(true)
     const response = await axios.post(`${BASE_URL}/users/login`,userLogin)
     localStorage.setItem('token',response.data.token)
     console.log(response)
     setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      console.log(error)
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
        <form onSubmit={(e)=>handleSubmit(e)}>
          <TextField 
          type="text" 
          id='input-form' 
          label="E-mail" 
          variant="outlined"  
          onChange={(e)=>setEmail(e.target.value)} 
          value={email}
          required />
          <TextField 
          type="password" 
          id='input-form' 
          label="Senha" 
          variant="outlined" 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required />
          <button className='btn'> Continuar</button>
        </form>
        <div className='line'></div>
      </div>
        <div className='signup-btn'>
          <button className='btn btn-white'>Crie uma conta!</button>
        </div>


    </Layout>

  )
}

export default HomePage