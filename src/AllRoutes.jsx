import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
    </>
  );
};

export default AllRoutes;
