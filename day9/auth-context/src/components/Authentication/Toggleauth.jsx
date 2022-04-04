import { useContext, useEffect, useState } from "react";
import { Auth } from "../../Context/AuthContext";
import axios from "axios";
export const Toogle = () => {
  const { isAuth, token } = useContext(Auth);

  // console.log(isAuth, token, "ttt");

  return (
    <>
      <div>{isAuth ? <h3> Token :{token}</h3> : <h3>NOT LOGIN </h3>}</div>
    </>
  );
};