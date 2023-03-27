import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
// adgadfgasdfadsf
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App