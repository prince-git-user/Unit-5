import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../Redux/Todo/Action";
import axios from "axios";
export const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const dbdata = useSelector((store) => store.todo.todo);
  const isLogged = useSelector((store) => store.authentication.isAuth);
  console.log(isLogged, "from hoome");
  useEffect(() => {
    getdata();
  }, []);

  const Addata = () => {
    axios({
      method: "POST",
      url: "http://localhost:4004/TODOS",
      data: {
        title: text,
        status: false,
      },
    }).then(() => {
      getdata();
    });
  };

  const getdata = () => {
    axios.get(" http://localhost:4004/TODOS").then(({ data }) => {
      dispatch(addtodo(data));
    });
  };

  if (isLogged == false) {
    // alert("pls login");
    return <Navigate to={"/login"} />;
  } else {
    return (
      <div>
        <input
          type="text"
          placeholder="enter todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            Addata();
          }}
        >
          ADD TODO
        </button>

        {dbdata.map((e) => (
          <div key={e.id}>{e.title} </div>
        ))}
      </div>
    );
  }
};