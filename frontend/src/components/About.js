// src/components/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="about-main">
          <img src="/assets/images/about.png" alt="About EPF" className="about-img mb-4" />
          <div className="about-text">
            <p>
              Empire Partner Foundation is dedicated to leveraging technology and innovation to address Africa's most pressing challenges. Our mission is to create sustainable solutions that uplift communities and empower individuals to achieve their full potential.
            </p>
            <p>
              We focus on various sectors including technology development, education, and youth empowerment. Through strategic partnerships and innovative programs, we aim to drive positive change and foster growth within the communities we serve.
            </p>
          </div>
        </div>
        <aside className="about-aside">
          <h4>Our Core Values</h4>
          <ul>
            <li>Innovation: Embracing new technologies and ideas to solve problems.</li>
            <li>Integrity: Operating with transparency and honesty.</li>
            <li>Empowerment: Supporting individuals and communities to reach their potential.</li>
            <li>Sustainability: Creating long-lasting and impactful solutions.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default About;
