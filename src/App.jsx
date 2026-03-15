import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Carousel from './components/Carousel'
import SplashScreen from './components/SplashScreen'
import carouselImg1 from './assets/carousel-1.jpg'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4500); // Increased to 4.5s to accommodate rotation (2.5s) + divider (0.8s) + tagline (0.6s)

    return () => clearTimeout(timer);
  }, []);

  const restaurantImages = [
    carouselImg1, // Restaurant interior
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200', // Modern interior
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200'  // Elegant restaurant
  ]

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="app-container fade-in">
      <Header />
      <main className="main-content">
        <Carousel images={restaurantImages} direction="left" />
        <Login />
      </main>
      <Footer />
    </div>
  )
}

export default App
