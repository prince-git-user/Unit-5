import { useState } from "react"



function Form(){

    const [formdata,setFormdata]=useState({
        username:"",
        age:""
    })

    const handlechange=(e)=>{
    
        const {id,value}=e.target;
        setFormdata(
            {...formdata,
            [id]:value,}
        )
    }



   const handlesubmit=(e)=>{
       e.preventDefault()
        //console.log(formdata)
        fetch("http://localhost:8080/profile",{
            method:"POST",
            body:JSON.stringify(formdata)
        })



   }
       
     


    return <form onSubmit={handlesubmit}>
        <input value={formdata.username} onChange={handlechange} type="text" placeholder="enter username" id="username"/>
        <input value={formdata.age} onChange={handlechange} type="number" placeholder="enter age" id="age"/>
        <input type="submit" value="submit"/>
    </form>
}
export {Form}