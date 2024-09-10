// src/components/Services.js
import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/Services.css';

const Services = () => {
  const services = [
    { name: 'Technology Development', description: 'Innovative solutions for the community.', icon: 'fas fa-laptop-code' },
    { name: 'Youth Empowerment', description: 'Programs focused on empowering Africa\'s youth.', icon: 'fas fa-users' },
  ];

  return (
    <div className="services bg-primary text-white">
      <div className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <ServiceCard name={service.name} description={service.description} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
