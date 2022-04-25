import { useState } from "react"

export const Employform=()=>{


    const [formdata,setFormdata]=useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        martialstatus:""

    })

return <form>
    <lebel>
        Name:<input type="text" placeholder="Employee Name"/>
    </lebel>
    <lebel>Age :<input type="number" placeholder="age"/></lebel>
    <label>Address:<input type="text" placeholder="Address"/></label>
    <lebel>
    {/* <select value={formdata.department} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select> */}

    </lebel>
    

    <input type="select-tag" placeholder="Department"/>
    <input type="number" placeholder="Salary"/>
    <input placeholder="martial status" />
    <input type="submit" value="submit"/>


</form>



}