import React, { useState } from 'react'
import Input from '../../components/Input'
import Stack from '../../components/Stack'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'
import Navigation from '../../components/Navigation'
import { Link } from 'react-router-dom'

function Forgot(){
  function changeButton(s1: string, s2: string) {
    if (!s1 || !s2){
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  const [button, setButton] = useState(false)
  const [email, setEmail] = useState('')

  function handleValidation(){}

  return (
    <div id="page-login">
      <Navigation />
      <main id="main-login">
        <section className="login">
          <div className="login-form">
            <h2>Eita, esqueceu sua senha?</h2>
            <p>
                Não esquenta, vamos dar um jeito nisso.
            </p>
            <div className="form-input">
              <form onSubmit={handleValidation}>
                <Stack>
                  <Input 
                    name="email" 
                    placeholder="E-mail"
                    required
                    className="email"
                    value={email}
                    onMouseOut={e => { !email && changeButton('', 'true')}}
                    onChange={(e) => { 
                      setEmail(e.target.value)
                      changeButton(email, 'true')
                    }} 
                  />
                </Stack>
              </form>
              <button 
                disabled={!button}
                className="button" 
                type="submit">Enviar</button>
            </div>
          </div>
        </section>
        <section className="login-logo">
          <div className="logo-content">
            <img src={logoImg} alt="Logo"/>
            <h2>Sua plataforma de estudos online</h2>
          </div>
        </section>
      </main>
    </div>
  )
}


export default Forgot