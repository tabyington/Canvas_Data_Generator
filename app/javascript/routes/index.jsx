import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Options from "../components/Options";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Options />} />
    </Routes>
  </Router>
);