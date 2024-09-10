// src/components/ServiceCard.js
import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ name, description, icon }) => (
  <div className="service-card card mb-4 shadow-sm border-0">
    <div className="card-body text-center">
      <i className={`${icon} service-icon mb-3`}></i>
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
