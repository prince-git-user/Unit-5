import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { Todoitem } from "./Todoitem"
import {nanoid} from "nanoid"


export const Todo=()=>{

    const [todolist,setTodolist]=useState([])

    const handlestatus=(id)=>{
          console.log("id :",id)
          setTodolist(todolist.map((e)=>(e.id===id ? {...e,status: !e.status}:e)))
    }

    const getData=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(4)

        }
        setTodolist([...todolist,payload])
    }
return <div>
  <TodoInput getData={getData}/>
  {todolist.map((e)=>(
     <Todoitem handlestatus={handlestatus} todo={e}/>
  ))}
</div>


}