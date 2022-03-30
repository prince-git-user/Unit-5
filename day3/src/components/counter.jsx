import React from 'react'

const Counter = () => {
    const [counter,setcounter]=React.useState(2)
    const handleincrement=(value)=>{
  setcounter(counter+value)
    }
    return (
      <>
       <h1>counter</h1>
       <h1>{counter}</h1>
       <button onClick={()=>handleincrement(1)}>ADD</button>
       <button onClick={()=>handleincrement(-1)}>REDUCE</button>
       <button>DOUBLE</button>
      </>
    );
}

export default Counter
