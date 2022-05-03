import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthAction } from "../Redux/Auth/Action";
export const NavBAr = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="butt">
        <Link to="/">Home</Link>
      </button>
      <button className="butt">
        <Link to="/login">login</Link>
      </button>
      <button
        className="butt"
        onClick={() => {
          dispatch(AuthAction(false));
        }}
      >
        Logout
      </button>
    </div>
  );
};