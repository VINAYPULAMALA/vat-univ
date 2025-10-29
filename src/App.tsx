import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
``;
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import WhyOrange from "./pages/WhyOrange";
import HowToApply from "./pages/HowToApply";
import Carpentry from "./pages/Carpentry";
import EarlyChildhood from "./pages/EarlyChildhood";
import EarlyChildhoodEducation from "./pages/EarlyChildhoodEducation";
import CommercialCookery from "./pages/CommercialCookery";
import KitchenManagement from "./pages/KitchenManagement";
import HospitalityManagement from "./pages/HospitalityManagement";
import ManagementLearning from "./pages/ManagementLearning";
import ApplyOnlinePage from "./pages/Contact";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/WhyOrange" element={<WhyOrange />} />
        <Route path="/HowToApply" element={<HowToApply />} />
        <Route path="/carpentry" element={<Carpentry />} />
        <Route path="/early-childhood" element={<EarlyChildhood />} />
        <Route path="/early-childhood-education" element={<EarlyChildhoodEducation />} />
        <Route path="/commercial-cookery" element={<CommercialCookery />} />
        <Route path="/kitchen-management" element={<KitchenManagement />} />
        <Route path="/hospitality-management" element={<HospitalityManagement />} />
        <Route path="/management-learning" element={<ManagementLearning />} />
        <Route path="/enquiry" element={<ApplyOnlinePage />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
