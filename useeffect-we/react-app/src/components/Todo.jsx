
import { useEffect, useState } from 'react'

export const Todo=()=>{


    const [todos,setTodos]=useState([]);
    const[text,setText]=useState("")

useEffect(()=>{
    fetch("http://localhost:8080/todos").then((d)=>d.json())
   .then((data)=>{
      setTodos(data)
    })
        //   getData()
},[])

// async function getData(){
//     const data=await fetch("http://localhost:8080/todos")
//     .then((d)=>d.json())
//     setTodos(data)
// }



    return (
        <div>
           
           <input onChange={(e)=>{
               setText(e.target.value)
           }} type="text" placeholder="enter todo"/>
           <button onClick={()=>{
               const payload={
                   title:text,
                   status:false
               };
               fetch("http://localhost:8080/todos",{
                   mathod:"POST",
                   headers:{
                       "content-type":"application/json"

                   },
                   body:JSON.stringify(payload)
               })

               //axios.post("http://localhost:8080/todos",payload)
           }}>ADD todos</button>
           
      {todos.map((todo)=>(
        <div>{todo.id}-{todo.title}</div>
      ))}
           </div>
    )
}