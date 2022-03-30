import logo from './logo.svg';
import './App.css';

function App() {
 
     const data1=["Android","Blackberry","i-phone","Windows-Phone"]
const data2=["Samsung","Htc","Micromax","Apple"]
  return (
    <div>
      <h1>Mobile Operating System</h1>
      {data1.map((e)=>(
       <li>{e}</li>
      ))},<h1>Mobile Manufacturers</h1> ,{data2.map((e)=>(
        <li>{e}</li>
       ))}
    </div>
    
  )
      }


export default App;
