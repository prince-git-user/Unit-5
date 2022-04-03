import { useState } from "react"

export const GroceryInput =({itemchanges})=>{
 const[items ,setItems]=useState()
    return (
    <div>
            <h1>Gorcery List</h1>
            <input onChange={(e)=>{
            setItems(e.target.value)

            }} type="text " placeholder="Enter Items"               />
            <button onClick={()=>{
                itemchanges(items)
            }}>ADD ITEM</button>
            
        </div>
    )
}