import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: "🌸",
      title: "Natural Ingredients",
      description: "Sourced from the finest botanical gardens worldwide"
    },
    {
      icon: "✨",
      title: "Long Lasting",
      description: "Fragrances that stay with you throughout the day"
    },
    {
      icon: "🎨",
      title: "Artisan Crafted",
      description: "Each bottle is a work of art, designed with precision"
    },
    {
      icon: "🌍",
      title: "Sustainable",
      description: "Eco-friendly practices in every step of production"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Excellence in Every Detail</h2>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
