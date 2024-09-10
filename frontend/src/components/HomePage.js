import React, { useState, useEffect } from 'react';
import '../styles/HomePage.css';
import Footer from './Footer'; // Correct import path

const HomePage = () => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    fetch('/api/home')
      .then((response) => response.json())
      .then((data) => setHomeData(data))
      .catch((error) => console.error('Error fetching home data:', error));
  }, []);

  return (
    <div className="home-page">
      {/* Intro Video Section */}
      <div className="video-wrapper">
        <video className="intro-video" autoPlay muted loop>
          <source src="/assets/videos/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="text-center content">
            <img src="/assets/images/logo.png" alt="EPF Logo" className="epf-logo" />
            <h1 className="slide-in">{homeData.title || 'Welcome to Empire Partner Foundation'}</h1>
            <p className="slide-in">{homeData.description || 'Driving innovation and technology to solve Africa\'s problems.'}</p>
          </div>
        </div>
        {/* Falling Stones Animation */}
        <div className="falling-stones">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Content Section with Cards */}
      <div className="content-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card slide-in">
                <img src="/assets/images/technology.png" alt="Technology" className="card-img" />
                <h3>Technology Innovation</h3>
                <p>Solving problems using technology to foster progress across the continent.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card slide-in">
                <img src="/assets/images/youth.png" alt="Youth Empowerment" className="card-img" />
                <h3>Youth Empowerment</h3>
                <p>Empowering Africa's youth through skills development and opportunities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card slide-in">
                <img src="/assets/images/entrepreneurship.png" alt="Entrepreneurship" className="card-img" />
                <h3>Entrepreneurship</h3>
                <p>Supporting entrepreneurs to create sustainable solutions to Africa's challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section */}
      <div className="impact-section">
        <div className="container">
          <div className="text-center">
            <h2 className="impact-heading">Our Impact</h2>
            <div className="impact-content">
              <h4>Recent Projects</h4>
              <p>Explore some of our most recent projects and their impact on the communities we serve.</p>
              <ul>
                <li>Project A - A description of the impact.</li>
                <li>Project B - A description of the impact.</li>
                <li>Project C - A description of the impact.</li>
              </ul>
              <h4>Get Involved</h4>
              <p>Find out how you can contribute to our mission and be a part of the change.</p>
              <a href="/get-involved" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
