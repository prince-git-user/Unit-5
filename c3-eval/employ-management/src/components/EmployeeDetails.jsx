import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

     export const EmployeeDetails = () => {


      const {id}=useParams()
      const [users,setUsers]=useState({})
          useEffect(()=>{
              axios.get(`http://localhost:8080/employee/1`).then(({data})=>{
                  setUsers(data)
                  console.log(data)
              })
          },[])
      return (
        <div className="user_details">
          <img src={users.image} className="user_image" />
          <h4 className="user_name">{users.employee_name}</h4>
          <span className="user_salary">${users.salary}</span>
          <span className="tasks">
          <li className="task">{users.tasks}</li>

            
          </span>
          Status: <b className="status">{users.status}</b>
          Title: <b className="title">{users.title}</b>
          {/* Show this button only if user is not already terminated (users status is working) */}
          <button className="fire">Fire Employee</button>
          {/* Show this button only if user is not already team lead or terminated */}
          <button className="promote">promote</button>
        </div>
      );
    };
   
  

