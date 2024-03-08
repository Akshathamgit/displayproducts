// Navbar.js
import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">E-Commerce</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
