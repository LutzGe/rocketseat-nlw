import React, { useState, FormEvent } from 'react'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import Stack from '../../components/Stack'
// import background from '../../assets/images/give-classes-background@3x.png'
import logoImg from '../../assets/images/logo.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation'
import api from '../../services/api'

function Login(){

  
  function validateForm() {
    return login.length > 0 && password.length > 0;
  }

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  async function handleValidation(e: FormEvent){
      e.preventDefault()

      const response = await api.post('/login', {
        params: {
          login,
          password
        }
      })

      console.log(response)
  }

  return (
    <div id="page-login">
      <Navigation />
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
              <form onSubmit={handleValidation}>
                <Stack>
                  <Input 
                    name="login" 
                    placeholder="Login"
                    type="text"
                    required
                    className="login"
                    value={login}
                    onChange={(e) => { 
                      setLogin(e.target.value) 
                    }} 
                  />
                  <PasswordInput 
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    className="psswrd"
                    value={password}
                    onChange={ e => { 
                      setPassword(e.target.value) 
                    }}
                  />
                </Stack>
              </form>
              <div className="check">
                <div>
                  <input 
                    className="check" 
                    type="checkbox" 
                    name="remember" 
                    id="remember"
                    checked={remember}
                    onChange={ e => {
                      setRemember(!remember) 
                    }}
                  />
                  <label htmlFor="check">Lembrar-me</label>
                </div>
                <Link to="/forgot" >Esqueci minha senha</Link>
              </div>
              <button 
                disabled={!validateForm()}
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
      </main>
    </div>
  )
}


export default Login