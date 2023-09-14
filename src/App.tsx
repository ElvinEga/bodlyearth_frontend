"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Engagement from "./pages/engagement";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} exact /> */}
        <Route path="/" element={<Home />} />
        <Route path="/engagement" element={<Engagement />} />
      </Routes>
    </>
  );
}

export default App;
