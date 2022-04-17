

export const Todoitem=({todo,handlestatus})=>{
return (
    <div>
        {todo.title}-{todo.status ? "Done" : "Not Done"} 
       <button onClick={()=>handlestatus(todo.id)}>Toggle</button>
    </div>
)
}