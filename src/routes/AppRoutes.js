import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { LoginWithOTP } from "../components/loginWithOtp/LoginWithOTP";
import { LoginWithPassword } from "../components/loginWithPassword/LoginWithPassword";
import { Register } from "../components/register/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/loginwithotp" Component={LoginWithOTP}/>
      <Route path="/loginwithpassword" Component={LoginWithPassword}/>
      <Route path="/register" Component={Register}/>
    </Routes>
  );
};

export default AppRoutes;
