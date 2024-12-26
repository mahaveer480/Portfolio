import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';
// import { useState } from 'react';    
import '../styles/allreviews.css';
import Rateme from './rateme';

export default function AllReviews() {
    const [showComponent, setShowComponent] = useState(false);

    const handleButtonClick = () => {
      setShowComponent(!showComponent); 
    };





  const [data, setData] = useState([]);
  const emotions = [
    { id: 1, label: 'Very Happy', stars: 5 },
    { id: 3, label: 'Happy', stars: 4 },
    { id: 2, label: 'Neutral', stars: 3 },
    { id: 3, label: 'Unhappy', stars: 2 },
    { id: 3, label: 'Sad', stars: 1 },
  ];

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'reviews'));
      const reviews = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(reviews);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderStars = (stars) => {
    return (



      <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={`star ${i < stars ? '' : 'inactive'}`}></div>
        ))}
      </div>
    );
  };

  return (
    <div>
                  {showComponent && <Rateme />}
      <div className="reviews-section">
        <div id='button-allreviews'>

        <button id='add-review'onClick={handleButtonClick}>
        {showComponent ? 'done' : 'Add review ++'}
      </button>

      {/* Conditionally render the component */}
        </div>
        <h2 className="reviews-title">Portfolio Reviews</h2>
        <p className="reviews-counter">
          {data.length} {data.length === 1 ? 'review' : 'reviews'} 
        </p>
        {data.length > 0 ? (
            <div className="reviews-list">
            {data.map((review, index) => {
                const emotion = emotions.find((e) => e.id === review.review);
                return (
                    <div key={index} className="review-item">
                  <div className="review-header">
                    <h3>
                      {review.name} - {emotion?.label || 'Unknown'}
                    </h3>
                    <div className="review-stars">
                      {renderStars(emotion?.stars || 0)}
                    </div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              );
            })}
          </div>
        ) : (
            <p>No reviews are available.</p>
        )}
      </div>
    </div>
  );
}
