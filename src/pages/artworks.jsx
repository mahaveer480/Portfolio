// Import necessary modules
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Navbar1 from '../components/Navbar';
import Footer from '../components/footer';
import '../styles/artworks.css';
import { Link } from 'react-router-dom';

const db = getFirestore();

export default function Artworks() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'artworks')); 
        const imageList = querySnapshot.docs.map(doc => doc.data().url);
        setImages(imageList);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Navbar1 />
      <br /><br /><br />
      <div className="artworks-container">
        <h1 className="artworks-title">
          Artworks
          <Link 
            target='_main' 
            to="https://www.instagram.com/ramanimahaveer/" 
            style={{ color: "black", fontSize: "20px" }}>
            ( MORE ART WORKS  &gt; )
          </Link>
        </h1>
        <div className="image-grid">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className={`image-box effect-${index % 4}`}>
                <img src={image} alt={`Artwork ${index + 1}`} />
              </div>
            ))
          ) : (
            <p>Loading artworks...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
