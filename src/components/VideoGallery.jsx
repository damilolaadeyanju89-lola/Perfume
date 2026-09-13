import React from 'react'
import './VideoGallery.css'

const VideoGallery = () => {
  return (
    <section id="collection" className="video-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-subtitle">Visual Experience</span>
          <h2 className="section-title">Discover Our World</h2>
          <p className="section-description">
            Immerse yourself in the artistry and craftsmanship behind each fragrance
          </p>
        </div>
        
        <div className="video-grid">
          {/* VIDEO 1 - Main Feature */}
          <div className="video-item large">
            <div className="video-placeholder">
              <video className="video-media" autoPlay loop muted playsInline>
                <source src={`${import.meta.env.BASE_URL}resources/flowers.MP4`} type="video/mp4" />
              </video>
            </div>
            <div className="video-info">
              <h3>Nature's Essence</h3>
              <p>Where blooming florals meet timeless elegance</p>
            </div>
          </div>
          
          {/* VIDEO 2 */}
          <div className="video-item">
            <div className="video-placeholder">
              <video className="video-media" autoPlay loop muted playsInline>
                <source src={`${import.meta.env.BASE_URL}resources/butterfly.MP4`} type="video/mp4" />
              </video>
            </div>
            <div className="video-info">
              <h3>Ingredient Journey</h3>
              <p>From nature to bottle</p>
            </div>
          </div>
          
          {/* VIDEO PLACEHOLDER 4 */}
          <div className="video-item">
            <div className="video-placeholder">
              <video className="video-media" autoPlay loop muted playsInline>
                <source src={`${import.meta.env.BASE_URL}resources/VIGW6037.MP4`} type="video/mp4" />
              </video>
            </div>
            <div className="video-info">
              <h3>Signature Collection</h3>
              <p>Our premium fragrances</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoGallery
