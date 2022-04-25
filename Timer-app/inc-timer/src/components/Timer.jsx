import { useEffect, useState } from "react"

export const Timer=()=>{

    const [count,setCount]=useState(10)
useEffect(
    ()=>{
       let id= setInterval(()=>{
          setCount((prev)=>{
              if(prev<=0){
                  
                 clearInterval(id)
                 return 0
                
              }
              return prev-1;
          })
        },1000);
        return ()=>{
            clearInterval(id)
        }
    },[]
)


    return <div>
        <h3>Counter :{count}</h3>
    </div>
}