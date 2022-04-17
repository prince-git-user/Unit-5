import React, { useState } from "react";

function App() {
const [score,setScore]=useState(76);
const [wicket,setWicket]=useState(2)
const [ball,setBall]=useState(50)

if(score>100){
  return(
    
<div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{ball}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handleSChange(1)} className="addScore1">Add 1</button>
        <button onClick={()=>handleSChange(4)} className="addScore4">Add 4</button>
        <button onClick={()=>handleSChange(6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleWchange(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleBchange(1)}>Add 1</button>
      </div>
     
         <h3 className="status">"India Won"</h3>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
           
    </div>


    </div>
  )
}

const handleSChange=(value)=>{
   return setScore(score+value);

}

const handleWchange=(value)=>{
  if(wicket>=12){
    return ;
  }
  return setWicket(wicket+value)
}
 const handleBchange=(value)=>{
   return setBall(ball+value)
 }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{`${Math.floor(ball/6)}.${ball%6}`}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handleSChange(1)} className="addScore1">Add 1</button>
        <button onClick={()=>handleSChange(4)} className="addScore4">Add 4</button>
        <button onClick={()=>handleSChange(6)} className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleWchange(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleBchange(1)}>Add 1</button>
      </div>
     
         
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
           
    </div>
  );
}

export default App;
