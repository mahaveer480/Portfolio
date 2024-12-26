import React, { useState } from "react";
import "../styles/home.css"; // Make sure the CSS file is correctly imported
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">HIRE </div>
      <ul  className={isMenuOpen ? "active" : ""}>
        <li><Link  to="/">Home</Link></li>
        <li><Link to="/cheat">Chat With Me</Link></li>
        <li><Link to="/websites">Websites</Link></li>
        <li><Link  to="/artworks">Art Works</Link></li>
      </ul>
      <Link target="_main" to="https://www.fiverr.com/s/8zmw6pE"><button className="cta-button" >Start Project</button></Link>
      <div  className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
