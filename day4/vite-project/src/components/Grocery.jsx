import { useState } from "react"
import { GroceryInput } from "./GrocerInput"
import { Grocerylist } from "./GrocerList"

 export const Grocery=()=>{
const [totalitem,steTotalitem]=useState([])
// console.log(totalitem,"tot itm")
const itemchanges=(data)=>{
    const x={
        title:data,
        id:Math.floor(Math.random() * 100) + 1
    }
   steTotalitem([...totalitem,x])
//    console.log(totalitem,"totl")
}

  const deletefun =(id)=>{
    //  const delte =totalitem.map((el)=>el.id===id) 
     let b = totalitem.filter(function (e) {
      return e.id === id
});

 b.forEach(function(element) {
   var index = totalitem.indexOf(element)
   console.log(index)
   totalitem.splice(index, 1)
   console.log(totalitem,"totitm")
   
  })
  steTotalitem([...totalitem])/// tado delete 
    
     

  }
    return(
    < div className="main">
    <GroceryInput  itemchanges={itemchanges}/>
    {totalitem.map((e)=>
    <Grocerylist deletefun={deletefun} items={e.title} id={e.id}/>)}
    </div>
    )
}