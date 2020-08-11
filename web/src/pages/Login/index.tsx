import React from 'react'
import Input from '../../components/Input'
// import background from '../../assets/images/give-classes-background@3x.png'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'
import { Link } from 'react-router-dom'

function Login(){

  function handleValidation(){}

  return (
    <div id="page-login">
      <main id="main-login">
        <section className="login-logo">
          <div className="logo-content">
            <img src={logoImg} alt="Logo"/>
            <h2>Sua plataforma de estudos online</h2>
          </div>
        </section>
        <section className="login">
          <div className="login-form">
            <h2>Fazer o Login</h2>
            <div className="form-input">
              <form className="form-content" onSubmit={handleValidation}>
                <Input 
                  name="email" 
                  placeholder="E-mail"
                  required
                  className="email"
                  // value={name}
                  // onChange={(e) => { setName(e.target.value) }} 
                />
                <Input 
                  name="password"
                  placeholder="Senha"
                  required
                  type="password"
                  className="psswrd"
                  // value={avatar}
                  // onChange={(e) => { setAvatar(e.target.value) }}
                />
              </form>
              <div className="check">
                <div>
                  <input className="check" type="checkbox" name="remember" id="remember"/>
                  <label htmlFor="check">Lembre-me</label>
                </div>
                <Link to="/forgot" >Esqueci minha senha</Link>
              </div>
              <button className="button" type="submit">Entrar</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


export default Login