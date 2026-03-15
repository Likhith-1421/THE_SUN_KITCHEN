import { useState, useEffect } from 'react';
import logoImg from '../assets/sunset-kitchen-logo.jpg';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animationPhase, setAnimationPhase] = useState('logo'); // phases: logo, rotating, ready

  useEffect(() => {
    // Stage 1: Slide in from right while logo fades in
    // This happens automatically via the 'entrance' class in the 'logo' phase
    const logoTimer = setTimeout(() => {
      setAnimationPhase('rotating');
    }, 1800); // 1.8 seconds to allow for slide-in (1s) and seeing the logo

    // Stage 2: Rotate the card once
    const rotationTimer = setTimeout(() => {
      setAnimationPhase('ready');
    }, 2600); // 1800ms wait + 800ms rotation

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(rotationTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      <div className={`login-card ${animationPhase === 'logo' ? 'entrance' : ''} ${animationPhase === 'rotating' ? 'rotating' : ''}`}>
        {/* Stage 1 & 2: Show Logo (including during rotation) */}
        {(animationPhase === 'logo' || animationPhase === 'rotating') && (
          <div className="login-logo-preview">
            <img src={logoImg} alt="Logo" />
            <p style={{ color: '#f97316', fontWeight: 600 }}>The Sunset Kitchen</p>
          </div>
        )}

        {/* Stage 3: Show Form Content */}
        {animationPhase === 'ready' && (
          <div className="form-content-fade">
            <div className="login-header">
              <h2>The Sunset Kitchen</h2>
              <p>Flavors That Shine</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
              
              <button type="submit" className="login-btn">Sign In</button>
            </form>

            <div className="signup-prompt">
              <p>Don't have an account? <a href="#">Sign up for free</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
