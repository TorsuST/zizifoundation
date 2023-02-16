import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/home";
import Aboutzizi from "./pages/aboutZizi";
import Joinzizi from "./pages/joinZizi";
import OurProjects from "./pages/ourProjects";
import Contact from "./pages/contact";
import Donate from "./pages/donate";
import ProjectDetails from "./components/projectdetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/about" element={<Aboutzizi />} />
      <Route path="/join_us" element={<Joinzizi />} />
      <Route path="/our_projects" element={<OurProjects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/project_details" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
