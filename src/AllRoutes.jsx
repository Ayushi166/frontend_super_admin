import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Categories from "./components/categories/Categories";

const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
    </>
  );
};

export default AllRoutes;
