import { useContext, useState } from "react";
import "./App.css";
import { Toogle } from "./components/Authentication/Toggleauth";
import { Button } from "./components/Navebar/Button";
import { Auth } from "./Context/AuthContext";
function App() {
  const { boolen, token } = useContext(Auth);

  // console.log(boolen);
  return (
    <>
      <div className="App">
        <Button />
        <Toogle />
      </div>
    </>
  );
}

export default App;
