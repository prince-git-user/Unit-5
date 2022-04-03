import { useEffect, useState } from "react"

export const  Timer=(props)=>{
   const[timer,setTimer]=useState(props.start)
   useEffect(()=>{
   const id= setInterval(()=>{
        setTimer((prve)=>{
                if(prve=== props.end){
                    clearInterval(id)
                    return prve
                }
            return prve + 1
        })
       },1000)
       return(()=>{
           clearInterval(id)
       })
   },[])
    return(
        <div>
            <h1>Time:{timer} </h1>
        </div>
    )
}