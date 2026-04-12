import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        {/* Hero Background Video */}
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/resources/HOME1.MP4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text fade-in">
          <span className="hero-subtitle">Discover Your Signature Scent</span>
          <h1 className="hero-title">
            THE ART OF
            <span className="highlight"> ELEGANCE</span>
          </h1>
          <p className="hero-description">
            Immerse yourself in a world of luxurious fragrances, 
            crafted with the finest ingredients from around the globe.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Explore Collection</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
