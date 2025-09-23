import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';``
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import WhyOrange from './pages/WhyOrange';
import HowToApply from './pages/HowToApply';
import Carpentry from './pages/Carpentry';

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;