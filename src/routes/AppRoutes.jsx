import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import Services from "../pages/Services";
import Policy from "../pages/Policy";
import TermsAndConditions from "../pages/TermsAndConditions";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Policy" element={<Policy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default AppRoutes;
