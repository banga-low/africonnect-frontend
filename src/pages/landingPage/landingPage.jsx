import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './landingPage.css';

// Image Imports (Updated to .png)
import cottonImg from '../../assets/LandingPage/cotton.png';
import cocoaTree from '../../assets/LandingPage/cocoa tree.png';
import sweater from '../../assets/LandingPage/sweater.png';
import wool from '../../assets/LandingPage/wool.png';
import woolTree from '../../assets/LandingPage/wool tree.png';
import sheaButter from '../../assets/LandingPage/shea butter.png';
import cocoa from '../../assets/LandingPage/cocoa.png';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const popularMaterials = [
    { name: 'shea butter', img: sheaButter },
    { name: 'cocoa', img: cocoa },
    { name: 'cotton', img: cottonImg }
  ];

  return (
    <div className="landing-container">
      {/* 1. Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon"></span>
          <h1>Africonnect</h1>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#buy">Buy</a>
          <button className="nav-search-btn" onClick={() => navigate('/login')}>Login</button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header 
        className="hero" 
        style={{ backgroundImage: `url(${cottonImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-content">
          <h2 className="hero-title">
            Source Raw materials Across <span className="text-green">Africa,</span><br />
            Faster, Cheaper, And <span className="text-green">Smarter</span>
          </h2>
          <p className="hero-subtitle">
            Connect with trusted suppliers, compare prices, and source raw materials across the continent.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Search Materials</button>
            {/* Added spacer class for the gap */}
            <button className="btn-primary btn-spacer" onClick={() => navigate('/signup')}>
               Become a supplier
            </button>
          </div>
        </div>
      </header>

      {/* 3. Statistics Section (Restored to original size) */}
      <section className="stats-grid">
        <div className="stat-card">5000+ Suppliers</div>
        <div className="stat-card">20+ African countries</div>
        <div className="stat-card">Verified Suppliers</div>
        <div className="stat-card">Transparent Pricing</div>
      </section>

      {/* 4. Sourcing Materials (Huddle Section) */}
      <section className="sourcing-huddle">
        <div className="huddle-text">
          <h3>Sourcing <span className="text-green">raw</span> materials shouldn't be a hurdle</h3>
        </div>
        <div className="huddle-grid">
          <img src={cocoaTree} alt="Cocoa tree" className="huddle-img" />
          <img src={sweater} alt="Sweater" className="huddle-img" />
          <img src={wool} alt="Wool" className="huddle-img" />
          <img src={woolTree} alt="Wool tree" className="huddle-img" />
        </div>
      </section>

      {/* 5. Popular Materials Section */}
      <section className="materials-section">
        <h3 className="section-title">Popular materials on Africonnect</h3>
        <div className="material-list">
          {popularMaterials.map((item) => (
            <div key={item.name} className="material-item">
              <img src={item.img} alt={item.name} className="material-thumb" />
              <span className="material-name">{item.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. About Africonnect */}
      <section className="info-section">
        <h3 className="section-title">About <span className="text-green">Africonnect</span></h3>
        <p className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        
      </section>

      {/* 7. Why Choose Africonnect */}
      <section className="info-section">
        <h3 className="section-title">Why choose <span className="text-green">Africonnect</span></h3>
        <ul className="check-list">
          <li>Verified supplier network</li>
          <li>Lower sourcing cost</li>
          <li>Cross-border access</li>
          <li>Faster procurement</li>
        </ul>
      </section>

      {/* 8. Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h2 className="hero-title">
            Source Raw materials Across <span className="text-green">Africa,</span><br />
            Faster, Cheaper, And <span className="text-green">Smarter</span>
          </h2>
          <p className="footer-subtitle">
            Connect with trusted suppliers, compare prices, and source raw materials across the continent.
          </p>
          <div className="footer-btns">
            <button className="btn-primary">Search Materials</button>
            <button className="btn-primary btn-spacer" onClick={() => navigate('/signup')}>
               Become a supplier
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;