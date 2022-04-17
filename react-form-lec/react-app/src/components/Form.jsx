import { useState } from "react"



function Form(){

    const [formdata,setFormdata]=useState({
        username:"",
        age:""
    })

    const handlechange=(e)=>{
   
        const {id,value}=e.target      
         setFormdata(...setFormdata,
                    )
     
       }
   const handlesubmit=(e)=>{
       e.preventDefault()
        console.log(formdata)



   }
       
     


    return <form onSubmit={handlesubmit}>
        <input onChange={handlechange} type="text" placeholder="enter username" id="username"/>
        <input onChange={handlechange} type="number" placeholder="enter age" id="age"/>
        <input type="submit" value="submit"/>
    </form>
}
export {Form}