import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:12
  });


  
 
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
        <button  onClick={()=>{
         return  setInv(inv.books)
        }} className="circlularButton">+</button>
        <button  className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{inv.notebooks} </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{inv.pens} </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inv.inkpens} </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      
            {/*calculate total and show it*/}
      total: {0}
    </div>
  );
};
