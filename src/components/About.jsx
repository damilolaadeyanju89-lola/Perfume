import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-subtitle">Our Story</span>
          <h2 className="section-title">Crafted with Passion</h2>
          <p className="about-text">
            Since our inception, we have been dedicated to creating extraordinary fragrances 
            that capture the essence of luxury and sophistication. Each scent is a masterpiece, 
            meticulously crafted using the finest ingredients sourced from the most exotic 
            locations around the world.
          </p>
          <p className="about-text">
            Our perfumes are more than just fragrances – they are memories, emotions, 
            and timeless elegance bottled for you to experience every day.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Unique Fragrances</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
