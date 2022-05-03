import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../Redux/Auth/Action";
export const Login = () => {
  const dispatch = useDispatch();

  const generatetoke = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        localStorage.setItem("Token", JSON.stringify(res.data.token));
      });
  };
  return (
    <div>
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter password" />
      <button
        onClick={() => {
          generatetoke();
          dispatch(AuthAction(true));
        }}
      >
        Login
      </button>
    </div>
  );
};