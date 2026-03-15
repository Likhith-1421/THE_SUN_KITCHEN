import React, { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel({ images, direction = 'left' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`carousel-container ${direction}`}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
