export const Grocerylist=({items,id,deletefun})=>{
    return(
        
        <div className="maindiv">
        {items}
        
        <button onClick={()=>deletefun(id)}>Delete</button>
    </div>
 
)
}