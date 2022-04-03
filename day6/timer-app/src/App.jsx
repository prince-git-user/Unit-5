import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'
let start=1;
let end=10;
function App() {
const [show,setTimer]=useState(true)
  return (
    <div>

     {show ? < Timer start={start} end={end}/> : "You Stoped Timer "}

      <button onClick={()=>{
      setTimer(show ? false :true)
      }}>{show ? "Hide me": "Showtimer"}</button>
    </div>

  
  )
}

export default App