import React from "react";
import "../styles/home.css";
// import placeholderImage from "../assets/images/placeholder.png"; // Replace with your actual image path
import mahaveerramani from '../assests/images/mahaveerramani.png'
import { useNavigate } from "react-router-dom";
import github from "../assests/images/github.png"
import youtube from "../assests/images/youtube.png"
import social  from "../assests/images/social.png"
import linkdin from '../assests/images/linkedin.png'



const MainSection = () => {
let navigate =useNavigate()
  
const span=()=>{
navigate('/cheat')



}


  return (<>
    <section className="main-section">
      <div className="text-content">
        <div>
          
        <h1>
        Honest and<br />
          <span className="highlight" onClick={span} >skilled</span> frontend developer
        </h1>
        <div className="circular-text">More fun, more focus</div>
</div><br/>
<div style={{display:'flex'}}>
  
<br />
<div id="main">
<div className="container">
      <div className="circle-profile">
       <a  id="links3"
       target="_main"
       href="https://github.com/mahaveer480">
        <img
          src={github}   alt="Profile"  className="profile-img"/>
</a>
      </div>

    </div>
    
    </div>
    <div id="main">
<div className="container">
      <div className="circle-profile">
       <a target="_main" id="links3" href="https://www.facebook.com/profile.php?id=100068646013228">
        <img src={linkdin}alt="Profile"className="profile-img"/>   
        </a>
      </div>

    </div>
    
    </div>
    <div id="main">
<div className="container">
      <div className="circle-profile">
       <a target="_main" id="links3" href="https://www.instagram.com/ramanimahaveer/">
        <img src={social}alt="Profile"className="profile-img"/>   
        </a>
      </div>

    </div>
    
    </div>
</div>

      </div>

      <div className="image-section">
      <img
            id="styledImage"
            src={mahaveerramani}
            alt="Black-and-White Styled Photo"
          />
      </div>
    </section>
    </>
  );
};

export default MainSection;
