import React, { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './views/landing-page/landing-page'
import Home from './views/home/home'
import ProtectedRoute from './components/privateRoute'

function App() {

  const key = "autoriza"
  
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem(key) || "false"))
  
  function authCallback(login) {

    setAuth(login)

  }

  useEffect(() => {
    localStorage.setItem(key, auth)
  }, [auth])

  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<LandingPage callback={(login) => authCallback(login)}/>} />

          <ProtectedRoute path="home" element={<Home />} authorize={auth}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;