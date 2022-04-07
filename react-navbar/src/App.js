import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="navbar">
    
     <Logo/>
    <Links/>
     <Button/>
    </div>
  );
}


function Logo(){
  return (
    <div >
      <h3 className='logo'>LOGOBAKERY</h3>
    </div>
  )
}

function Links(){
  const links=["Services","Projects","About"];
  return (
    <ul className='ul-tag'>
      {links.map((e)=>(
        <li className="li-tag">{e}</li>
      ))}
    </ul>
  )
}
function Button(){
  return (
    <div className='btn-div'>
      <button className='btn'>Contact</button>
    </div>
  )
}




export default App;
