import React, { useState } from "react";
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa";
import "../styles/rateme.css";

const Rateme = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [comment, setComment] = useState("");

  const emotions = [
    { id: 1, label: "Very Happy", icon: <FaRegSmile size={32} />, color: "#4caf50" },
    { id: 2, label: "Happy", icon: <FaRegSmile size={32} />, color: "#8bc34a" },
    { id: 3, label: "Neutral", icon: <FaRegMeh size={32} />, color: "#ffeb3b" },
    { id: 4, label: "Unhappy", icon: <FaRegFrown size={32} />, color: "#ff9800" },
    { id: 5, label: "Very Unhappy", icon: <FaRegFrown size={32} />, color: "#f44336" },
  ];

  const handleEmotionClick = (id) => {
    setSelectedEmotion(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", { selectedEmotion, comment });
    alert("Thank you for your feedback!");
  };

  return (
    <div id="mainfeedback-container">
    <div className="feedback-container">
      <div className="feedback-header">
        <h2>How are you feeling?</h2>
        <p>Your input helps us better tailor our services for you.</p>
      </div>
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
      <p className="feedback-label">
        {selectedEmotion ? emotions.find((e) => e.id === selectedEmotion).label : "Select an emotion"}
      </p>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Add a Comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit Now</button>
      </form>
    </div></div>
  );
};

export default Rateme;
