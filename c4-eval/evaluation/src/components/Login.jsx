
import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [formdata,setformdata]=useState([])
  const [form,setform]=useState({
    username:"",
    password:""
  })
  

  const handlechange=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
  }


  const handlesubmit=()=>{
    axios.get("http://localhost:8080/users").then((data)=>{
      setform(data)
    })
  }

  {formdata.map((e)=>{
    if(e.username===form.username && e.pass===form.password){
      dispatch(loggedIn(true))
      if(e.role=="admin"){
        navigate("/neworder")
      }
    }
  })}
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
  );
};
