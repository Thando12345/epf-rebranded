// src/pages/GetInvolved.js
import React from 'react';
import '../styles/GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get Involved</h2>
        <div className="row">
          {/* Volunteering Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/images/volunteer.jpg" alt="Volunteering" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Volunteering</h5>
                <p className="card-text">
                  Join our team of dedicated volunteers to make a tangible difference in your community.
                </p>
                <a href="/volunteer" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          {/* Donating Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/images/donate.jpg" alt="Donating" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Donating</h5>
                <p className="card-text">
                  Your contributions help us fund important projects and initiatives. Every little bit helps!
                </p>
                <a href="/donate" className="btn btn-primary">Donate Now</a>
              </div>
            </div>
          </div>
          {/* Partnership Section */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="/assets/images/partner.jpg" alt="Partnership" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Partnerships</h5>
                <p className="card-text">
                  Partner with us to support our mission and achieve common goals for community betterment.
                </p>
                <a href="/partnerships" className="btn btn-primary">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
