import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VideoGallery from './components/VideoGallery'
import ImageGallery from './components/ImageGallery'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Features />
      <VideoGallery />
      <ImageGallery />
      <Footer />
    </div>
  )
}

export default App
