import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Users from "./components/users/Users";
import Grievances from "./components/grievances/Grievances";
import Work from "./components/work/Work";

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Grievances" element={<Grievances />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
    </>
  );
};

export default AllRoutes;
