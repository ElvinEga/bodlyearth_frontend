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
import PersistLogin from "./components/auth/PersistLogin";
import RequireAuth from "./components/auth/RequireAuth";
import { ROLES } from "./constants/roles";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} exact /> */}
          {/* public routes */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/verify" element={<OtpPage />} />
          <Route path="/create_password" element={<CreatePassword />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />

          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route
              element={
                <RequireAuth
                  allowedRoles={[
                    ROLES.User,
                    ROLES.Manager,
                    ROLES.Admin,
                    ROLES.Superadmin,
                  ]}
                />
              }
            >
              <Route path="/dashboard" element={<Home />} />
              <Route path="/engagement" element={<Engagement />} />
              <Route path="/help" element={<HelpPage />} />
            </Route>

            <Route path="/team" element={<TeamMembers />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/recent_activity" element={<RecentActivity />} />
            <Route path="/resources" element={<Resources />} />

            <Route
              element={
                <RequireAuth allowedRoles={[ROLES.Admin, ROLES.Superadmin]} />
              }
            >
              <Route path="/admin" element={<AdminHome />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
