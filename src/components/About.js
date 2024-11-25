import React from 'react';
import '../sytles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p className="about-description">
          At <span className="highlight">Our Company</span>, we strive for excellence in everything we do. Our team of dedicated professionals is committed to delivering top-notch services that make a lasting impact. We believe in innovation, collaboration, and results.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
