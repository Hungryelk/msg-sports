import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./captain/Login";
import NewUserLogin from "./captain/NewUserLogin";
import CaptainPanel from "./captain/CaptainPanel";

const Captains = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="new-login" element={<NewUserLogin />}></Route>
        <Route path="/*" element={<CaptainPanel />}></Route>
      </Route>
    </Routes>
  );
};

export default Captains;
