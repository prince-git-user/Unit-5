import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Timer } from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  const [show,setshow]=useState(true)

  

  return (
    <div className="App">
      {show ? <Timer/> : null}
      
      <button onClick={()=>{
       setshow(!show)
      }}>{show ? "Hide" :"Show"} Timer</button>
    </div>
  )
}

export default App
