import "./app.css"
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import "./app.css"
import { useState } from "react";
function App() {

  const [show,setShow]=useState("false")
  return (
    <div className="App">
   
      <button onClick={()=>{
        setShow(!show)
      }} className="togglebtn">Add a new Student</button>
       {show ? <ShowStudents/>:<AddStudent/>}
     
      {/* <ShowStudents/> */}
      {/* <AddStudent/>   */}


      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
