import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:12
  });
     

  const handleBChange=(value)=>{
    if(inv.books<=0){
      return;
    }
    setInv(prevInv=>({...prevInv,books:inv.books+value}))
    setTotal(inv.books+inv.pens+inv.notebooks+inv.inkpens)
  }

  const handleNBChange=(value)=>{
    if(inv.notebooks<=0){
      return;
    }
    setInv(prevInv=>({...prevInv,notebooks:inv.notebooks+value}))
    setTotal(inv.books+inv.pens+inv.notebooks+inv.inkpens)
  }

  const handlePChange=(value)=>{
    if(inv.pens<=0){
      return;
    }
    setInv(prevInv=>({...prevInv,pens:inv.pens+value}))
    setTotal(inv.books+inv.pens+inv.notebooks+inv.inkpens)
  }


  const handleIPChange=(value)=>{
    if(inv.inkpens<=0){
      return;
    }
    setInv(prevInv=>({...prevInv, inkpens:inv.inkpens+value}))
    setTotal(inv.books+inv.pens+inv.notebooks+inv.inkpens)
  }

  const [total,setTotal]=useState(inv.books+inv.pens+inv.notebooks+inv.inkpens)
  
 
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:{inv.books} </span>
        <button onClick={()=>handleBChange(1)}  className="circlularButton">+</button>
        <button onClick={()=>handleBChange(-1)} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{inv.notebooks} </span>
        <button onClick={()=>handleNBChange(1)}   className="circlularButton">+</button>
        <button onClick={()=>handleNBChange(-1)}  className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{inv.pens} </span>
        <button onClick={()=>handlePChange(1)} className="circlularButton">+</button>
        <button onClick={()=>handlePChange(-1)} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inv.inkpens} </span>
        <button onClick={()=>handleIPChange(1)} className="circlularButton">+</button>
        <button  onClick={()=>handleIPChange(-1)}className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
           
            {/*calculate total and show it*/}
      total: {total}
    </div>
  );
};
