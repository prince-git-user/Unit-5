
import {useState} from 'react'
import axios from 'axios'

export const AddStudent = () => {
  const [formData,setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    gender:"",
    age:"",
    tenth_score:"",
    twelth_score:"",
    preferred_branch:""

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
      axios.post("http://localhost:8080/students",formData)
      window.location.reload()
    }} className="addstudent">
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
        {" "}
        Email:
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.email}
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
          onChange={(e)=>handelChange(e)}
            name="gender"
            className="male"
            type="radio"
            value={"male"}
          />{" "}
          Female{" "}
          <input
          onChange={(e)=>handelChange(e)}
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
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
        Tenth Score:{" "}
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.tenth_score}
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
        onChange={(e)=>handelChange(e)}
         value={formData.twelth_score}
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
        />{" "}
      </div>
      <div>
        <select
        onChange={(e)=>handelChange(e)}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
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
