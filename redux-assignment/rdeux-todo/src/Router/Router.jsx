import { Routes, Route } from "react-router-dom";

import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { NavBAr } from "../Components/NavBar";

export const AllRoutes = () => {
  return (
    <>
      <NavBAr />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};