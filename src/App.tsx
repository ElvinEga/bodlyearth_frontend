"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} exact /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
