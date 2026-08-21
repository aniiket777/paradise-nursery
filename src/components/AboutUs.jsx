import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Importing App.css to access the landing page background styles

const AboutUs = () => {
  return (
    <div className="landing-page-background">
      <div className="landing-content-overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery, your premier destination for lush, beautiful houseplants! 
          We believe that bringing a touch of nature indoors can completely transform your living 
          space, purify your air, and boost your mood. Whether you are a seasoned plant parent 
          or just starting your green journey, we offer a carefully curated selection of indoor 
          plants, stunning succulents, and vibrant flowering plants to suit every lifestyle. 
          Breathe life into your home with us today.
        </p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
