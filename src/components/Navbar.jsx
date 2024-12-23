import React, { useState } from "react";
import "../styles/home.css"; // Make sure the CSS file is correctly imported
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <nav>
      <div className="logo">HIRE</div>
      <ul className={isMenuOpen ? "active" : ""}>
        <li><a href="/cheat">Chat With Me</a></li>
        <li><a href="/websites">Websites</a></li>
        <li><a href="artworks">Art Works</a></li>
        <li><a href="about">About Us</a></li>
      </ul>
      <a href="https://www.fiverr.com/s/8zmw6pE"><button className="cta-button" >Start Project</button></a>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
