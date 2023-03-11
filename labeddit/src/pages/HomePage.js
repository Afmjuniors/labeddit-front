import React from 'react'
import logoFull from "../assets/images/logo-full.svg"
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout>
      <div className='wrapper-greetings'>
        <img src={logoFull} alt="LabEddit Logo" />
      </div>
      <div className="form-wrapper">
          <form>
            <input className='input-form' type='text'  placeholder='E-mail' required />
            <input className='input-form' type="password" placeholder='Senha'required/>
            <button className='btn'> Continuar</button>
          </form>
      </div>
    <div>
      <div>
        <button className='btn btn-white'>Crie uma conta!</button>
      </div>

    </div>

    </Layout>

  )
}

export default HomePage