import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextprovider } from "./Context/AuthContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextprovider>
      <App />
    </AuthContextprovider>
  </React.StrictMode>,
  document.getElementById("root")
);