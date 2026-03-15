import logoImg from '../assets/sunset-kitchen-logo.jpg';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-logo-container">
        <img src={logoImg} alt="Logo" className="splash-logo" />
        <h1 className="splash-text">The Sunset Kitchen</h1>
        <div className="splash-divider"></div>
        <p className="splash-tagline">Flavors That Shine</p>
      </div>
    </div>
  );
};

export default SplashScreen;
