import { useEffect, useState } from "react"

export const Todo=()=>{
    const[text,setText]=useState("")
    const axios = require('axios').default;
    const [todolist,setTodolist]=useState([])
    const[page,setPage]=useState(1)
    
    useEffect(()=>{
    gettodo()
    },[page])
    
    const gettodo=()=>{ 
        axios.get(` http://localhost:4002/Tododlist?_limit=3&_page=${page}}`)
    .then((res)=>{
    setTodolist(res.data)
    
    })
    }
    return(
        <div>
            <input placeholder="enter task" onChange={(e=>setText(e.target.value))} type="text"/>
            <button onClick={()=>{
                 axios({
                    method: 'post',
                    url: ' http://localhost:4002/Tododlist',
                    data: {
                      name: text,
                      status: "not done"
                    }
                  }).then(()=>{
                      gettodo();
                  });
            }}> ADD Grocery</button>
            {todolist.map(e=>
            <div key={e.id}>{e.name}</div>
            )}
            <button onClick={()=>{
        setPage(page-1)
    }}>PRE</button>
    <button onClick={()=>{
        setPage(page+1)
    }}>NEXT</button>
        
        </div>
    )
}