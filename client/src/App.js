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
import Status from "./pages/Status";
import Stafflisting from "./pages/Stafflisting";
import Propertylisting from "./pages/Propertylisting";
import Viewreport from "./pages/Viewreport";
import Viewrent from "./pages/Viewrent";

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
        <Route path="/status" element={<Status/>}/>
        <Route path="/registration/staff" element={<RegistrationStaff />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/status/stafflisting" element={<Stafflisting />} />
        <Route path="/status/propertylisting" element={<Propertylisting />} />
        <Route path="/status/viewreport" element={< Viewreport/>} />
        <Route path="/status/viewrent" element={< Viewrent/>} />
      </Routes>
    </Router>
  );
}

export default App;
