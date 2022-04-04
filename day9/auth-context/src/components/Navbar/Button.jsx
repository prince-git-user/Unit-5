import { useContext } from "react";
import { Auth } from "../../Context/AuthContext";
export const Button = () => {
  const { handlechanger, handlechnager2, token, isAuth } = useContext(Auth);

  console.log(isAuth, token, "booo");
  return (
    <>
      <div>
        <button
          onClick={() => {
            handlechanger();
          }}
        >
          LOG IN
        </button>

        <button
          onClick={() => {
            handlechnager2();
          }}
        >
          LOG OUT
        </button>
      </div>
      {/* <div>{token}</div> */}
    </>
  );
};
