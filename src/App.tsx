"use client";

import { useEffect } from "react";
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
import UsersList from "./pages/users";
import { UserProvider } from "./context/UserProvider";
import UnauthorizedPage from "./pages/unauthorized";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Scores from "./pages/resources/scores";
import EcoCrop from "./pages/Eco";

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Routes>
            {/* public routes */}
            <Route path="/signin" element={<LogIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/verify" element={<OtpPage />} />
            <Route path="/create_password" element={<CreatePassword />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            {/* <UserProvider> */}
            <Route path="/dashboard" element={<Home />} />
            <Route path="/help" element={<HelpPage />} />
            {/* <Route path="/team" element={<TeamMembers />} /> */}
            <Route path="/teams/:companyId" element={<TeamMembers />} />
            <Route path="/ecocrop" element={<EcoCrop />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/profile" element={<Profile />} />
            {/* we want to protect these routes */}
            {/* <Route element={<Auth allowedRoles={["admin"]} />}> */}
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/recent_activity" element={<RecentActivity />} />
            <Route path="/admin" element={<AdminHome />} />
            {/* </Route> */}
            {/* </UserProvider> */}
          </Routes>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
