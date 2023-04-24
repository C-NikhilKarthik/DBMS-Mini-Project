import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegistrationClient from "./pages/RegistrationClient";
import RegistrationStaff from "./pages/RegistrationStaff";
import RegistrationProperty from "./pages/RegistrationProperty";
import RegistrationOwner from "./pages/RegistrationOwner";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Contact from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration/client" element={<RegistrationClient />} />
        <Route path="/registration/owner" element={<RegistrationOwner />} />
        <Route
          path="/registration/property"
          element={<RegistrationProperty />}
        />
        <Route path="/registration/staff" element={<RegistrationStaff />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
