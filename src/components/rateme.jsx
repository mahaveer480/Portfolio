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
  const [isFormVisible, setIsFormVisible] = useState(true); // State to toggle form visibility

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
      alert("Please Enter Your Name");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEmotion || !name || !comment) {
      alert("Please fill out the entire form.");
    } else {
      try {
        await addDoc(collection(db, "reviews"), {
          review: selectedEmotion,
          name: name,
          comment: comment,
        });
        fetchReviews();
        alert("Thank you for your feedback!");
        setIsFormVisible(false); // Hide the form after submission
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div id="feedback-container">
      {isFormVisible ? (
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
            {selectedEmotion ? emotions.find((e) => e.id === selectedEmotion)?.label : ""}
          </p>

          <form className="feedback-form" onSubmit={handleSubmit}>
            <textarea
              className="comment-input"
              placeholder="Add a Comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="submit-button" type="submit">
              Submit Feedback
            </button>
          </form>
        </div>
      ) : (
        <p className="thank-you-message">Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default Rateme;
