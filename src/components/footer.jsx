import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div>
      <footer style={{ backgroundColor: "#2c2c2c", color: "#fff", padding: "40px 20px", textAlign: "center" }}>
  <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", textAlign: "left" }}>
    
    <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
      <h3 style={{ borderBottom: "2px solid #fff", paddingBottom: "10px", marginBottom: "15px" }}>Quick Links</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li><Link to="/websites" style={{ color: "#fff", textDecoration: "none" }}>Website Section</Link></li>
        <li><Link to="/cheat" style={{ color: "#fff", textDecoration: "none" }}>Cheat With Me</Link></li>
        <li><Link to="/artworks" style={{ color: "#fff", textDecoration: "none" }}>My Artworks</Link></li>
 </ul>
    </div>

    <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
      <h3 style={{ borderBottom: "2px solid #fff", paddingBottom: "10px", marginBottom: "15px" }}>About Me</h3>
      <p style={{ lineHeight: 1.6 }}>Welcome to my portfolio! Explore my website projects, reviews, creative "Cheat With Me" tutorials, and stunning artworks.</p>
    </div>

    <div style={{ flex: 1, minWidth: "200px", margin: "10px" }}>
      <h3 style={{ borderBottom: "2px solid #fff", paddingBottom: "10px", marginBottom: "15px" }}>Contact Me</h3>
      <p>Email: <a href="mailto:your-email@example.com" style={{ color: "#fff", textDecoration: "none" }}>ramanimahaveer4@gmail.com</a></p>
      <p>Phone: <a href="tel:+1234567890" style={{ color: "#fff", textDecoration: "none" }}>+92 3363104670</a></p>
      <div style={{ marginTop: "10px" }}>
        <a href="https://www.facebook.com/profile.php?id=100068646013228" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 5px" }}>Facebook</a>
        <a href="https://www.linkedin.com/in/mahaveer-ramani-a9aa7a31a" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 5px" }}>Linked in</a>
        <a href="https://www.instagram.com/ramanimahaveer/" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 5px" }}>Instagram</a>
      </div>
    </div>

  </div>

  <div style={{ marginTop: "20px", borderTop: "1px solid #fff", paddingTop: "15px" }}>
    <p>&copy; 2024 Mahaveer Ramani. All Rights Reserved.</p>
  </div>
</footer>

    </div>
  )
}
