import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationClient from "./pages/RegistrationClient";
import RegistrationStaff from "./pages/RegistrationStaff";
import RegistrationProperty from "./pages/RegistrationProperty";
import RegistrationOwner from "./pages/RegistrationOwner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration/client" element={<RegistrationClient />} />
        <Route path="/registration/owner" element={<RegistrationOwner />} />
        <Route path="/registration/property" element={<RegistrationProperty />} />
        <Route path="/registration/staff" element={<RegistrationStaff />} />
      </Routes>
    </Router>
  );
}

export default App;
