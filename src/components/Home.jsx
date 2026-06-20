import React from 'react';
import { Link } from 'react-router-dom';
import { restaurantHero } from '../assets/images';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={restaurantHero} alt="Restaurant Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1>Welcome to The Sunset Kitchen</h1>
          <p>Experience the finest dining in a modern atmosphere.</p>
          <Link to="/book-table" className="book-now-btn">Book a Table</Link>
        </div>
      </div>
      
      <div className="features-grid">
        <div className="feature-card">
          <h3>Exquisite Cuisine</h3>
          <p>Hand-crafted dishes by world-renowned chefs.</p>
        </div>
        <div className="feature-card">
          <h3>Modern Ambiance</h3>
          <p>A sophisticated environment for your special moments.</p>
        </div>
        <div className="feature-card">
          <h3>Premium Service</h3>
          <p>Attentive and personalized service at every step.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
