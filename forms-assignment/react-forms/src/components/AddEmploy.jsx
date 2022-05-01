import {useState} from 'react'
import axios from 'axios'

export const AddEmploy = () => {
  const [formData,setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    age:"",
    address:"",
    department:"",
    martialstatus:""

  })


  const handelChange = (event)=>{
    if(event.target.checked){
      setFormData({...formData,[event.target.className]:true})
      return;
    }
   
    setFormData({...formData,[event.target.className]:event.target.value})
  }





  return (
    
    
    <form  onSubmit={(event)=>{
      event.preventDefault()
      axios.post("http://localhost:8080/employs",formData)
      window.location.reload()
    }} className="addemploy">
      <div>
        Firstname:{" "}
        <input
        onChange={(e)=>handelChange(e)}
        value={formData.first_name}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.last_name}
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
        />
      </div>

      
      <div>
        Age{" "}
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.age}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      
      <div>
        address:{" "}
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.address}
          type="number"
          name="address"
          className="address"
          placeholder="enter address"
        />{" "}
      </div>
      <div>
        <select
        onChange={(e)=>handelChange(e)}
          value={""} // select dropdown needs both value and onChange attributes
          name="department"
          className="department"
        >
          <option value="operation">law</option>
          <option value="account">commerce</option>
          <option value="acedmic">science</option>
          <option value="instructor">sports</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
    
  );
};