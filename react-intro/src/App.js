import logo from './logo.svg';
import './App.css';

function App() {
  const data=[
    {title:"Mobile Operating System",items:["Android","Blackberry","iPhone","Windows Phone"]},
    {title:"Mobile Manufacturer",items:["samsung","htc","Micromax","apple"]}
  ]
  return (
    <div >
      {data.map((user)=>(
        <MobileOs title={user.title} items={user.items}/>
      ))}
    </div>
  );
}

function MobileOs({title,items}){
  return (
    <div>
<h1>{title}</h1>
   <div>
     {items.map((e)=>(
       <li>{e}</li>
     ))}
   </div>
    </div>
    
  ) 
}


export default App;
