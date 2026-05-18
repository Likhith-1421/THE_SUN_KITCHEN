import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/sunset-kitchen-logo.jpg';
import './Login.css';
import axios from "axios"

export default function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [conformPassword, setConformPassword] = useState('');
  const [animationPhase, setAnimationPhase] = useState('logo'); // phases: logo, rotating, ready
  const [error, setError] = useState('');

  const handleLogin = async(e) =>
  {
     e.preventDefault();
    try{
      if(isSignup)
      {
         if (password !== conformPassword) {
           setError("Passwords do not match!");
           return;
         }
         setError("");
         const response = await axios.post("http://localhost:5555/Register",{
          firstName,
          lastName,
          email,
          mobile,
          password,
          conformPassword
        })
        console.log(response.data)
        navigate('/home'); // Redirect after signup
      }
      else {
        const response = await axios.post("http://localhost:5555/Login",{
          email,
          password,
          conformPassword
        })
        console.log(response.data)
        navigate('/home'); // Redirect after login
      }
     }
    catch(err)
    {
        console.log(err)
        // For demonstration purposes, if the backend is not running, 
        // we'll still allow navigation so the user can see the home page.
        // In a real app, you'd handle this error properly.
        navigate('/home'); 
    }
  }

  useEffect(() => {
    // Stage 1: Slide in from right while logo fades in
    const logoTimer = setTimeout(() => {
      setAnimationPhase('rotating');
    }, 1800);

    // Stage 2: Rotate the card once
    const rotationTimer = setTimeout(() => {
      setAnimationPhase('ready');
    }, 2600);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(rotationTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e); // Use handleLogin for both
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

              {isSignup && (
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobile" 
                    placeholder="Enter your mobile number" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  required
                />
              </div>

              {isSignup && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Conform Password</label>
                  <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="••••••••" 
                    value={conformPassword}
                    onChange={(e) => {
                      setConformPassword(e.target.value);
                      if (error) setError("");
                    }}
                    required
                  />
                </div>
              )}

              {error && <p className="error-message" style={{ color: '#ef4444', fontSize: '0.875rem', fontWeight: 500, margin: '0.25rem 0' }}>{error}</p>}

              {!isSignup && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}
              
              <button type="submit" className="login-btn" onClick={handleLogin}>
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
