import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { NavBar } from "./components/navBar/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;
