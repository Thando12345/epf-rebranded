import React from 'react';
import '../styles/Donate.css';

const Donate = () => {
  return (
    <div className="donate-container container">
      <header className="text-center mb-4">
        <h1 className="display-4">Support Our Cause</h1>
        <p className="lead">Your contribution helps us make a difference in the communities we serve. We appreciate your generosity!</p>
      </header>

      <section className="donation-options">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="donation-option card">
              <div className="card-body">
                <h3 className="card-title">One-Time Donation</h3>
                <p className="card-text">Make a single donation to support our current projects.</p>
                <button className="btn btn-primary">Donate Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="donation-option card">
              <div className="card-body">
                <h3 className="card-title">Monthly Subscription</h3>
                <p className="card-text">Provide ongoing support with a monthly subscription.</p>
                <button className="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="donation-option card">
              <div className="card-body">
                <h3 className="card-title">Corporate Sponsorship</h3>
                <p className="card-text">Partner with us for corporate sponsorship opportunities.</p>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
