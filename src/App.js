import React from "react";
import { AdmissionEnquiry } from "./components";
import { Placement } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Placement />} />
          <Route path="/admissionenquiry" element={<AdmissionEnquiry />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
