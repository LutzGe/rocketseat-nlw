import React, { useState } from 'react'
import Input from '../../components/Input'
import PasswordInput from '../../components/PasswordInput'
import Stack from '../../components/Stack'

import logoImg from '../../assets/images/logo.svg'

import './styles.css'
import Navigation from '../../components/Navigation'
import api from '../../services/api'

function Signin(){
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleValidation(){
    // api.post('/user')
  }

  return (
    <main id="main-login">
      <Navigation />
      <section className="login">
        <div className="login-form">
          <h2>Cadastro</h2>
          <p>
              Preencha os dados abaixo para começar
          </p>
          <div className="form-input">
            <form onSubmit={handleValidation}>
              <Stack>
              <Input 
                  name="name"
                  placeholder="Nome"
                  type="text"
                  required
                  className="name"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
                <Input 
                  name="sobrenome"
                  placeholder="Sobrenome"
                  type="text"
                  required
                  className="lastname"
                  value={lastname}
                  onChange={(e) => { setLastname(e.target.value) }}
                />
                <Input 
                  name="email" 
                  placeholder="E-mail"
                  type="text"
                  required
                  className="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }} 
                />
                <PasswordInput 
                  name="password"
                  placeholder="Senha"
                  type="password"
                  required
                  className="psswrd"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </Stack>
            </form>
            <button 
              // onChange={}
              className="button" 
              type="submit">Concluir cadastro</button>
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
  )
}


export default Signin