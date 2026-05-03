import React from 'react';
import './landingPage.css';

const LandingPage = () => {
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
          <button className="nav-search-btn">Search</button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero">
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
            <button className="btn-primary">Become a supplier</button>
          </div>
        </div>
        <div className="hero-images">
          <div className="placeholder-img tall-green"></div>
          <div className="placeholder-img wide-green"></div>
        </div>
      </header>

      {/* 3. Statistics Section */}
      <section className="stats-grid">
        <div className="stat-card">5000+ Suppliers</div>
        <div className="stat-card">20+ African countries</div>
        <div className="stat-card">Verified Suppliers</div>
        <div className="stat-card">Transparent Pricing</div>
      </section>

      {/* 4. Popular Materials Section */}
      <section className="materials-section">
        <h3 className="section-title">popular materials on Africonnect</h3>
        <div className="material-list">
          {['cocoa', 'cotton', 'shea butter'].map((item) => (
            <div key={item} className="material-item">
              <span>{item}</span>
              <div className="placeholder-img blue-box"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. About Us Section */}
      <section className="info-section">
        <h3 className="section-title">About <span className="text-green">Africonnect</span></h3>
        <ul className="check-list">
          <li>Verified supplier network</li>
          <li>lower sourcing cost</li>
          <li>cross-border access</li>
          <li>faster procurement</li>
        </ul>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="info-section">
        <h3 className="section-title">why choose <span className="text-green">Africonnect</span></h3>
        <ul className="check-list">
          <li>Verified supplier network</li>
          <li>lower sourcing cost</li>
          <li>cross-border access</li>
          <li>faster procurement</li>
        </ul>
      </section>

      {/* 7. Footer Section (Mirroring Hero) */}
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
            <button className="btn-primary">Become a supplier</button>
          </div>
        </div>
        <div className="footer-images">
          <div className="placeholder-img tall-green"></div>
          <div className="placeholder-img wide-green"></div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;