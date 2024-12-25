import React, { useState, useEffect } from "react";
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa";
import "../styles/rateme.css";
import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "./firebase";

const Rateme = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const emotions = [
    { id: 1, label: "Very Happy", icon: <FaRegSmile size={32} />, color: "#4caf50" },
    { id: 2, label: "Happy", icon: <FaRegSmile size={32} />, color: "#8bc34a" },
    { id: 3, label: "Neutral", icon: <FaRegMeh size={32} />, color: "#ffeb3b" },
    { id: 4, label: "Unhappy", icon: <FaRegFrown size={32} />, color: "#ff9800" },
    { id: 5, label: "Very Unhappy", icon: <FaRegFrown size={32} />, color: "#f44336" },
  ];

  // Fetch reviews from Firestore
  const fetchReviews = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push(doc.data());
      });
      setData(reviews);
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleEmotionClick = (id) => {
    const name1 = prompt("What Is Your Name?");
    if (name1 !== null) {
      setSelectedEmotion(id);
      setName(name1);
    } else {
      alert('Please Enter Your Name');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "reviews"), {
        review: selectedEmotion,
        name: name,
        comment: comment
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Thank you for your feedback!");
      fetchReviews();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div id="feedback-container">
      {/* Feedback Form */}
      <div className="feedback-form-container">
        <h2 className="form-title">Share Your Experience</h2>
        <p className="form-subtitle">We value your feedback!</p>

        <div className="feedback-emotions">
          {emotions.map((emotion) => (
            <div
              key={emotion.id}
              className={`emotion ${selectedEmotion === emotion.id ? "selected" : ""}`}
              style={{
                backgroundColor: selectedEmotion === emotion.id ? emotion.color : "#f0f0f0",
              }}
              onClick={() => handleEmotionClick(emotion.id)}
            >
              {emotion.icon}
            </div>
          ))}
        </div>

        <p className="emotion-label">
          {selectedEmotion ? emotions.find((e) => e.id === selectedEmotion).label : "Select an emotion"}
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <textarea
            className="comment-input"
            placeholder="Add a Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="submit-button" type="submit">Submit Feedback</button>
        </form>
      </div>

      {/* Reviews Section */}
      {/* <div className="reviews-section">
        <h2 className="reviews-title">Customer Reviews</h2>
        {data.length > 0 ? (
          <div className="reviews-list">
            {data.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                  <h3>{review.name} - {emotions.find((e) => e.id === review.review)?.label}</h3>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available yet.</p>
        )}
      </div> */}
        </div>
  );
};

export default Rateme;
