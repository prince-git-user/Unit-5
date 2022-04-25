import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './components/Home'
import { About } from './components/About'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './components/Navbar'
import { Userlist } from './components/Userlist'
import { Userdetails } from './components/Userdetails'
import { PrivateComponent } from './components/PrivateComponent'
import { Login } from './components/Login'
 
function App() {
  

  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/users" element={<Userlist/>}></Route>
        
        <Route path='/users/:id' element={<PrivateComponent><Userdetails/></PrivateComponent>}></Route>
        
        <Route to="/login" element={<Login/>}></Route>
      </Routes>
     
      
    </div>
  )
}

export default App
