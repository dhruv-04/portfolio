import React from 'react';
import './homepage.css'; // Assuming you will create a separate CSS file for styling
import profilePic from './profile.jpg'; // Update the path to your photo

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="photo-section">
        {/* Replace 'your-photo.jpg' with the actual photo file name */}
        <img src={profilePic} alt="Dhruv Kumar" />
      </div>
      <div className="welcome-section">
        <h1>Hi! Myself<span className='Dhruv'> Dhruv Kumar</span>.</h1>
        <p>Discover the journey of my professional growth, from innovative projects to academic achievements.</p> 
        <p>Dive in to explore what drives my passion for technology!</p>
        {/* Update the href attribute with the path to your resume file */}
        <a href="/path-to-your-resume.pdf" download="YourName_Resume.pdf">
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;