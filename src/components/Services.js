import React from 'react';
import '../sytles/Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What We Offer</h2>
        <p className="services-description">
          Discover our exceptional services tailored to help you achieve your goals.
        </p>
        <div className="service-list">
          <div className="service-item">
            <div className="icon-container">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Creative Solutions</h3>
            <p>Innovative ideas and strategies to solve your challenges.</p>
          </div>
          <div className="service-item">
            <div className="icon-container">
              <i className="fas fa-code"></i>
            </div>
            <h3>Custom Development</h3>
            <p>Beautifully designed, scalable, and efficient applications.</p>
          </div>
          <div className="service-item">
            <div className="icon-container">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3>Data Analysis</h3>
            <p>Transform your data into actionable insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
