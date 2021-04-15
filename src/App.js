import React, { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './views/landing-page/landing-page'
import Home from './views/home'
import Transfer from './views/transfer'

import ProtectedRoute from './components/privateRoute'

function App() {
  
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("autoriza") || "false"))
  
  function authCallback(login) {

    setAuth(login)

  }

  useEffect(() => {
    localStorage.setItem("autoriza", auth)
  }, [auth])

  /*
  // seção para criar objetos vindos do backend
  const usuarios = [
    {
      name: "Luma Pontes",
      bdate: "16/05/1998",
      followers: 15,
      following: 19,
      balance: 1500.25,
      photo: "foto da luma"
    },
    {
      name: "Cainã Jucá",
      bdate: "04/03/1997",
      followers: 14,
      following: 18,
      balance: 2323.23,
      photo: "foto da caina"
    }
  ]

  const notificacoes = [
    {
      to: { name: "receptaculo1" },
      from: { name: "enviou1" },
      value: 30.50
    },
    {
      to: { name: "receptaculo2" },
      from: { name: "enviou2" },
      value: 40.50
    },
    {
      to: { name: "receptaculo3" },
      from: { name: "enviou3" },
      value: 322.50
    },
  ]
  // objetos criados
  */

  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<LandingPage callback={(login) => authCallback(login)}/>} />

          <ProtectedRoute 
            path="home" 
            element={<Home />} 
            authorize={auth}/>

          <ProtectedRoute
            path="transfer" 
            element={<Transfer />} 
            authorize={auth}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;