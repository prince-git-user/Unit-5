import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const AuthContextprovider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [token, setToken] = useState();

  const handlechanger = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        // console.log(res.data.token, "res");
        setToken(res.data.token);
      });
    setisAuth(true);
  };

  const handlechnager2 = () => {
    console.log("out");
    setisAuth(false);
    setToken(" ");
  };

  return (
    <Auth.Provider value={{ token, isAuth, handlechanger, handlechnager2 }}>
      {children}
    </Auth.Provider>
  );
};