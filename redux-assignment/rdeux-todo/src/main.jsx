import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider as Todoprovider } from "react-redux";
import { store } from "./Redux/Store";
ReactDOM.render(
  <React.StrictMode>
    <Todoprovider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Todoprovider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
