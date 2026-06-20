import SunsetKitchenLogo from './SunsetKitchenLogo';
import './Logo.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-logo-container">
        <SunsetKitchenLogo size={150} className="app-logo app-logo--splash" showTagline />
        <h1 className="splash-text">The Sunset Kitchen</h1>
        <div className="splash-divider"></div>
        <p className="splash-tagline">Flavors That Shine</p>
      </div>
    </div>
  );
};

export default SplashScreen;
