import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import BookTable from './components/BookTable'
import SplashScreen from './components/SplashScreen'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import AppLayout from './components/AppLayout'
import { useAuth } from './context/AuthContext'
import './App.css'

const SPLASH_SEEN_KEY = 'foodapp-splash-seen';

function App() {
  const { isAuthenticated, loading } = useAuth();
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return sessionStorage.getItem(SPLASH_SEEN_KEY) !== 'true';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!showSplash) return;

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(SPLASH_SEEN_KEY, 'true');
      } catch {
        // ignore storage errors
      }
      setShowSplash(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, [showSplash]);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (loading) {
    return <div className="auth-loading">Loading...</div>;
  }

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-table" element={<BookTable />} />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/home' : '/'} replace />}
      />
    </Routes>
  )
}

export default App
