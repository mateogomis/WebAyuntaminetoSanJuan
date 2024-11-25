import React from 'react';
import '../sytles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="logo">Logo</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#booking" className="cta-button">Book Your Visit</a>
      </nav>
      <div className="hero">
        <h1 className="hero-title">Mercado Sant Joan</h1>
        <p className="hero-subtitle">Discover Elegance, Tradition, and Flavors</p>
      </div>
    </header>
  );
}

export default Header;
