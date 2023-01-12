import { FaArrowLeft } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

// eslint-disable-next-line arrow-body-style
const Navbar = () => {
  return (
    <div className="nav-container">
      <a href="/" className="items-center">
        <div className="back-icon">
          <FaArrowLeft />
        </div>
        <div className="nav-title">
          <h1>Air Poluttion</h1>
        </div>
      </a>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Asia Capitals</Link></li>
          <li><Link to="/Africa Capitals">Africa Capitals</Link></li>
          <li>North America Capitals</li>
          <li>South America Capitals</li>
          <li>Europe Capitals</li>
          <li>Australia Capitals</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
