import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import Dashboard from "../pages/Dashboard";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
