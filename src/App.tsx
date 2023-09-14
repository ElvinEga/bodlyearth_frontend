"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Engagement from "./pages/engagement";
import TeamMembers from "./pages/teams";
import Roles from "./pages/teams/roles";
import Companies from "./pages/companies";
import RecentActivity from "./pages/Activity";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} exact /> */}
        <Route path="/" element={<Home />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/recent_activity" element={<RecentActivity />} />
      </Routes>
    </>
  );
}

export default App;
