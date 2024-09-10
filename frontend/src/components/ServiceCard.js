import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ name, description }) => (
  <div className="service-card card mb-4 shadow-sm">
    <img src="/assets/images/service-icon.png" alt={name} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
