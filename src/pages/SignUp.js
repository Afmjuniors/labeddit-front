import React, { useContext, useState } from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'
import { BASE_URL } from '../constants/baseUrl'
import { regexEmail, regexPassword } from '../constants/regex'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { CircularProgress } from '@mui/material'
import { goToFeed } from '../routes/coordinator'
import { GlobalContext } from '../context/GlobalContext'

const SignUp = () => {
    const navigate = useNavigate()

    const {setIsLogged} = useContext(GlobalContext)

    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isCheked, setIsCheked] = useState(false)
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
      

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name:nickname,
            email,
            password,
        }
        if(isValid){
            createNewUser(newUser)
        }

    }
    const createNewUser = async (newUser) => {
        try {
            setIsLoading(true)
            const response = await axios.post(`${BASE_URL}/users/signup`, newUser)
            localStorage.setItem('token', response.data.token)
            setIsLogged(true)
            setIsLoading(false)
            goToFeed(navigate)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    return (
        <Layout>
            <div className='wrapper-greetings'>
                <h2>Olá, boas vindas ao LabEddit ;) </h2>
            </div>
            <div className="form-wrapper">
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <TextField type="text"
                        id='input-form'
                        label="Apelido"
                        variant="outlined"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        required />
                    <TextField type="text"
                        id='input-form'
                        label="E-mail"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <TextField
                        type="password"
                        id='input-form'
                        label="Senha"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <p className='inside-text-form top-text' >Ao continuar, você concorda com o nosso <a className='inner-link'>Contrato de usuário</a>  e nossa <a className='inner-link'>Política de Privacidade</a></p>
                    <div className='checkbox-group'>
                        <input type="checkbox" checked={isCheked} onChange={(e) => setIsCheked(e.target.checked)} />
                        <span className='inside-text-form'>Eu concordo em receber emails sobre coisas legais no Labeddit</span>
                    </div>
                    <button className='btn' onClick={validation}>
                        {isLoading ?
                            <CircularProgress color="inherit" /> :
                            <span>Cadastrar</span>
                        }
                    </button>
                </form>
            </div>


        </Layout>

    )
}

export default SignUp