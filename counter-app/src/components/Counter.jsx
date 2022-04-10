import { useState } from "react"




function Counter(){
    const [counter,setCounter]=useState(0)

const handleChange=(value)=>{
    
    setCounter(counter+value)
}

    return (
        <div>
            <h3>Counter :{counter}</h3>
            <button onClick={()=>handleChange(1)}>ADD</button>
            <button onClick={()=>handleChange(-1)}>subtract</button>
            <button onClick={()=>{setCounter(counter*2)}}>Mult</button>
        </div>
    )
}
export {Counter}