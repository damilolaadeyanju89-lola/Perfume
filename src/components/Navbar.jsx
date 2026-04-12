import React from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1>GRÂCE</h1>
          <span className="logo-subtitle">Luxe</span>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#collection">Collection</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cta-button">Shop Now</button>
      </div>
    </nav>
  )
}

export default Navbar
