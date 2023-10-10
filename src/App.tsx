"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Engagement from "./pages/engagement";
import TeamMembers from "./pages/teams";
import Roles from "./pages/teams/roles";
import Companies from "./pages/companies";
import RecentActivity from "./pages/Activity";
import LogIn from "./pages/login";
import Resources from "./pages/resources";
import OtpPage from "./pages/login/otp";
import Profile from "./pages/profile";
import HelpPage from "./pages/help";
import AdminHome from "./pages/home/adminhome";
import CreatePassword from "./pages/login/createPassword";
import LandingPage from "./pages/landing";
import { AuthProvider } from "./context/AuthProvider";
import Auth from "./context/AuthRoute";
import UsersList from "./pages/users";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          {/* public routes */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/verify" element={<OtpPage />} />
          <Route path="/create_password" element={<CreatePassword />} />
          {/* <UserProvider> */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/users" element={<UsersList />} />

          <Route path="/profile" element={<Profile />} />
          {/* we want to protect these routes */}
          <Route element={<Auth allowedRoles={["admin"]} />}>
            <Route path="/" element={<LandingPage />} />

            <Route path="/engagement" element={<Engagement />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/recent_activity" element={<RecentActivity />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin" element={<AdminHome />} />
          </Route>
          {/* </UserProvider> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
