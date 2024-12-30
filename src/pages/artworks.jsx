// Import necessary modules
import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/Navbar';
import Footer from '../components/footer';
import '../styles/artworks.css';
import { Link } from 'react-router-dom';

// Dynamically import all images from the 'artworks' folder
const importAllImages = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const allImages = importAllImages(require.context('../assests/artworks', false, /\.(png|jpe?g|svg)$/));

export default function Artworks() {
  const [images, setImages] = useState([]); // State to store image URLs
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication
  const [authDetails, setAuthDetails] = useState({ username: '', password: '' });

  // Load all images from the folder
  useEffect(() => {
    setImages(allImages);
  }, []);

  // Authentication function
  const handleLogin = () => {
    const { username, password } = authDetails;
    if (username === 'mahaveer' && password === 'mahaveer') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  // Function to add a new artwork
  const handleAddArtwork = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar1 />
      <br /><br /><br />

      {/* Artworks Section */}
      <div className="artworks-container">
        <h1 className="artworks-title">
          Artworks
          {/* Link to Instagram for more artworks */}
          <Link
            target="_blank"
            to="https://www.instagram.com/ramanimahaveer/"
            style={{ color: 'black', fontSize: '20px' }}
          >
            ( MORE ART WORKS &gt; )
          </Link>
        </h1>

        {/* Image Grid */}
        <div className="image-grid">
          {images.length > 0 ? (
            images.slice(0, 40).map((image, index) => (
              <div key={index} className={`image-box effect-${index % 4} animate`}>
                <img src={image} alt={`Artwork ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>Loading artworks...</p>
          )}
        </div>
      </div>

      {/* Upload Section (Visible only after login) */}
      {isAuthenticated && (
        <div className="upload-section">
          <h2>Add New Artwork</h2>
          <input type="file" accept="image/*" onChange={handleAddArtwork} />
          <button>Add Artwork</button>
        </div>
      )}

      {!isAuthenticated && (
        <div className="login-container">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setAuthDetails({ ...authDetails, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setAuthDetails({ ...authDetails, password: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
}
