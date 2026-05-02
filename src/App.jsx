import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// temporary Placeholders we are going to change this
const Home = () => <div className="page-content"><h1>Welcome to AFRICONNECT</h1><p>Connecting Africa to raw materials.</p></div>;
const Search = () => <div className="page-content"><h1>Marketplace</h1><p>Search and compare prices for cocoa, coffee, and more.</p></div>;
const Dashboard = () => <div className="page-content"><h1>User Dashboard</h1><p>Manage your procurement and supplier lists.</p></div>;

function App() {
  return (
    <Router>
      <div className="App">
        {/* Basic Navigation Placeholder */}
        <nav style={{ padding: '20px', background: '#f4f4f4' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/search" style={{ marginRight: '15px' }}>Search</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        {/* The Route Switcher */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;