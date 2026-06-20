import React from 'react';
import Login from './Login';
import Carousel from './Carousel';
import { carouselImg1 } from '../assets/images';

const Landing = () => {
  const restaurantImages = [
    carouselImg1, // Restaurant interior
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200', // Modern interior
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200'  // Elegant restaurant
  ];

  return (
    <main className="main-content">
      <Carousel images={restaurantImages} direction="left" />
      <Login />
    </main>
  );
};

export default Landing;
