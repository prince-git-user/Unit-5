

import {useState,useEffect} from "react"
import axios from 'axios'


export const ShowEmploy = () => {

  const [allData,setAllData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/employs").then((res)=>{
      setAllData(res.data)
    })
  },[])


  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
           
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>address</th>
            <th>salary</th>
            <th>department</th>
            <th>martial status</th>
          </tr>
        </thead>
        <tbody className="tbody">

        {allData.map((employ) => {
            return (
              <tr  className="row">
                <td className="first_name">{employ.first_name}</td>
                <td className="last_name">{employ.last_name} </td>
                <td className="age">{employ.age}</td>
                <td className="address">{employ.address}</td>
                <td className="salary">{employ.salary}</td>
                <td className="martialstatus">{employ.martialstatus}</td>
                <td className="department">
                  {
                 employ.department
                  }
                </td>
               
              </tr>
            );
          })}
          
        </tbody>
      </table>
    </div>
  );
};
