import React, { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './views/landing-page/landing-page'
import Home from './views/home/home'
import ProtectedRoute from './components/privateRoute'

function App() {

  const [auth, setAuth] = useState(false)

  function authCallback(auth) {
    setAuth(auth)
  }

  return (
    <div className="App">

      {auth ? <h1>verdadeiro</h1> : <h1>falso</h1>}

      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<LandingPage callback={(login) => authCallback(login)}/>} />

          <ProtectedRoute path="home" element={<Home />} auth={auth}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;