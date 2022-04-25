import axios from "axios"
import {Link} from "react-router-dom"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export const EmployeeList = () => {
  const {id}=useParams()
  const [list,setlist]=useState([])
  useEffect(()=>{
      //https://reqres.in/api/users
      axios.get("http://localhost:8080/employee").then(({data})=>{
          console.log(data)
          setlist(data)
      })

  },[])

  return (
    <div className="list_container">
      {list.map((e)=>{
        return(
          <>
          <Link to ={`/employees/${list.id}`}>
          <div className="employee_card">
          <img src={e.image} className="employee_image" />
                  <span className="employee_name">{e.employee_name}</span>
                  <span className="employee_title">{e.title}</span>
                </div> 
          </Link>
         
                </>
        )
      })}
 

    </div>
  );
};
