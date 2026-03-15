import logoImg from '../assets/sunset-kitchen-logo.jpg';

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={logoImg} 
        alt="The Sunset Kitchen Logo" 
        style={{ 
          height: '64px',
          width: '64px',
          objectFit: 'cover',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: '2px solid #fff'
        }} 
      />
    </div>
  );
}
