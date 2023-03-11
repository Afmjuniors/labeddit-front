import React from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'
import TextField from '@mui/material/TextField'

const SignUp = () => {
    
    return (
        <Layout>
            <div className='wrapper-greetings'>
                <h2>Olá, boas vindas ao LabEddit ;) </h2>
            </div>
            <div className="form-wrapper">
                <form>
                <TextField type="text" id='input-form' label="Apelido" variant="outlined" required />
                <TextField type="text" id='input-form' label="E-mail" variant="outlined" required />
                <TextField type="password" id='input-form' label="Senha" variant="outlined" required />
                    <p className='inside-text-form'>Ao continuar, você concorda com o nosso <a className='inner-link'>Contrato de usuário</a>  e nossa <a className='inner-link'>Política de Privacidade</a></p>
                    <div className='checkbox-group'>
                        <input type="checkbox" />
                        <span className='inside-text-form'>Eu concordo em receber emails sobre coisas legais no Labeddit</span>
                    </div>
                    <button className='btn'> Cadastrar</button>
                </form>
            </div>


            </Layout>

    )
}

export default SignUp