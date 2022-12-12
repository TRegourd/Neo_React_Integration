import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/nav/Layout";
import NotFound from "../pages/404";
import Course from "../pages/Course";
import Home from "../pages/Home";
import Progress from "../pages/Progress";
import NavLinks from "./NavLinks.json";

export default function Router() {
  return (
    <Layout navlinks={NavLinks}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/courses/:id" element={<Course />} />
      </Routes>
    </Layout>
  );
}
