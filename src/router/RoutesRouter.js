import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Discovered from "../pages/Discovered";
import NotFound from "../pages/NotFound";

function RoutesRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Discovered />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesRouter;
