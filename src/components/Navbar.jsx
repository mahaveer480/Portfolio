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
        <li><a href="/cheats">Massage</a></li>
        <li><a href="#work">Our Work</a></li>
        <li><a href="#customers">Customers</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
      <button className="cta-button">Start Project</button>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
