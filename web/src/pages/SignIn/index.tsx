import React, { useState, ChangeEvent } from 'react'
import Input from '../../components/Input'
import Stack from '../../components/Stack'
// import background from '../../assets/images/give-classes-background@3x.png'
import logoImg from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom'

function Signin(){
  function checkEmail(){
    
  }

  function handleFormValidation() {

  }

  return (
    <div id="page-login">
      <main id="main-login">
        <section className="login">
          <div className="login-form">
            <h2>Cadastro</h2>
            <p>
                Preencha os dados abaixo para começar
            </p>
            <div className="form-input">
              <form onSubmit={handleFormValidation}>
                <Stack>
                  <Input 
                    name="email" 
                    placeholder="E-mail"
                    required
                    className="email"
                    // value={email}
                    // onChange={(e) => { setEmail(e.target.value) }} 
                  />
                  <Input 
                    name="password"
                    placeholder="Senha"
                    required
                    type="password"
                    className="psswrd"
                    // value={password}
                    // onChange={(e) => { setPassword(e.target.value) }}
                  />
                </Stack>
              </form>
              <div className="check">
                <div>
                  <input className="check" type="checkbox" name="remember" id="remember"/>
                  <label htmlFor="check">Lembrar-me</label>
                </div>
                <Link to="/forgot" >Esqueci minha senha</Link>
              </div>
              <button 
                // onChange={}
                className="button" 
                type="submit">Entrar</button>
            </div>
          </div>
          <footer>
            <div>
              <p>
                Não tem conta?
              </p>
              <Link to="/sign">Cadastre-se</Link>
            </div>
            <div>
              <p>
                É de graça
              </p>
              <img src={purpleHeartIcon} alt="corassaumzinho"/>
            </div>
          </footer>
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


export default Signin