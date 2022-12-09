import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/nav/Layout";

import NotFound from "../pages/404";

import Progress from "../pages/Progress";

import NavLinks from "./NavLinks.json";

export default function Router() {
  return (
    <Layout navlinks={NavLinks}>
      <Routes>
        <Route path="/" element={<Progress />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
