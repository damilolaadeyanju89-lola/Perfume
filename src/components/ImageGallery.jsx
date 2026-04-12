import React from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
  const images = [
    {
      title: "Midnight Bloom",
      category: "Floral Collection",
      description: "Delicate jasmine with rose petals",
      src: "/resources/IMG_6126.JPG"
    },
    {
      title: "Azure Dreams",
      category: "Fresh Collection",
      description: "Crisp bergamot and sea salt",
      src: "/resources/IMG_6127.JPG"
    },
    {
      title: "Golden Amber",
      category: "Oriental Collection",
      description: "Warm vanilla and amber essence",
      src: "/resources/IMG_6130.PNG"
    },
    {
      title: "Citrus Sunrise",
      category: "Citrus Collection",
      description: "Zesty mandarin and grapefruit",
      src: "/resources/IMG_6131.PNG"
    },
    {
      title: "Noir Velvet",
      category: "Luxury Collection",
      description: "Sensual oud and sandalwood",
      src: "/resources/IMG_6132.PNG"
    },
    {
      title: "Pure Grace",
      category: "Signature Collection",
      description: "Soft musk and white florals",
      src: "/resources/IMG_6133.PNG"
    },
    {
      title: "Emerald Mystique",
      category: "Limited Edition",
      description: "Exotic bergamot and green tea",
      src: "/resources/IMG_6134.PNG"
    }
  ];

  return (
    <section id="gallery" className="image-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-subtitle">Our Collection</span>
          <h2 className="section-title">Signature Fragrances</h2>
          <p className="section-description">
            Each fragrance tells a unique story of passion, artistry, and timeless beauty
          </p>
        </div>
        
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-placeholder">
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <div className="image-details">
                <span className="image-category">{image.category}</span>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
