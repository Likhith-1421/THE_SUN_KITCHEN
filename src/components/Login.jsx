import { useState, useEffect } from 'react';
import logoImg from '../assets/sunset-kitchen-logo.jpg';
import './Login.css';

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
    if (isSignup) {
      console.log('Signup attempt:', { firstName, lastName, email, password });
    } else {
      console.log('Login attempt:', { email, password });
    }
  };

  const toggleMode = (e) => {
    e.preventDefault();
    if (isToggling) return;

    setIsToggling(true);
    
    // Switch state halfway through rotation (400ms into 800ms animation)
    setTimeout(() => {
      setIsSignup(!isSignup);
    }, 400);

    // End toggle state after animation completes
    setTimeout(() => {
      setIsToggling(false);
    }, 800);
  };

  return (
    <div className="login-container">
      <div className={`login-card ${isSignup ? 'signup-mode' : ''} ${isToggling ? 'toggling' : ''} ${animationPhase === 'logo' ? 'entrance' : ''} ${animationPhase === 'rotating' ? 'rotating' : ''}`}>
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
              <h2>{isSignup ? 'Create Account' : 'The Sunset Kitchen'}</h2>
              <p>{isSignup ? 'Join our community' : 'Flavors That Shine'}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
              {isSignup && (
                <div className="name-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      placeholder="First Name" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      placeholder="Last Name" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

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

              {!isSignup && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}
              
              <button type="submit" className="login-btn">
                {isSignup ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="signup-prompt">
              <p>
                {isSignup ? 'Already have an account?' : "Don't have an account?"} 
                <a href="#" onClick={toggleMode}>
                  {isSignup ? 'Sign in' : 'Sign up for free'}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
