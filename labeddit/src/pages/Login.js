import React from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'

const HomePage = () => {
    return (
        <Layout>
            <div className='wrapper-greetings'>
                <h2>Olá, boas vindas ao LabEddit ;) </h2>
            </div>
            <div className="form-wrapper">
                <form>
                    <input className='input-form' type='text' placeholder='Apelido' required />
                    <input className='input-form' type='text' placeholder='E-mail' required />
                    <input className='input-form' type="password" placeholder='Senha' required />
                    <p>Ao continuar, você concorda com o nosso <a className='inner-link'>Contrato de usuário</a>  e nossa <a className='inner-link'>Política de Privacidade</a></p>
                    <div className='checkbox-group'>
                        <input type="checkbox" />
                        <span>Eu concordo em receber emails sobre coisas legais no Labeddit</span>
                    </div>
                    <button className='btn'> Cadastrar</button>
                </form>
            </div>


            </Layout>

    )
}

export default HomePage