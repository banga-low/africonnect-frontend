import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Fixed Imports: Adding './pages/' to the path so React can find them
import LandingPage from './pages/landingPage/landingPage';
import Login from './pages/SupplierLogin';
import SupplierSignup from './pages/SupplierSignup';
import SupplierDashboard from './pages/SupplierDashboard/SupplierDashboard.jsx';
import SupplierProfile from './pages/SupplierProfile/SupplierProfile.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default view: Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Navigation Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SupplierSignup />} />
          <Route path="/supplierdashboard" element={<SupplierDashboard/>} />
          <Route path="/supplier-set-profile" element={<SupplierProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;