import './App.css'
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Login from './components/Login'
import Home from './components/Home'
import Detail from './components/Detail'
function App() {

  return (
    <>
      <Router>
        <div className='h-screen'>
          <Header />
          <Routes>
            <Route path='/' element={<Login /> } />
            <Route path='/home' element={<Home /> } />
            <Route path='/watchlist' element={<Home /> } />
            <Route path='/originals' element={<Home /> } />
            <Route path='/movies' element={<Home /> } />
            <Route path='/series' element={<Home />} />
            <Route path='/detail/:id' element={<Detail/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
