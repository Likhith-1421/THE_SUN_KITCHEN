import SunsetKitchenLogo from './SunsetKitchenLogo';
import './Logo.css';

export default function Logo() {
  return (
    <div className="app-logo-wrap">
      <SunsetKitchenLogo size={68} className="app-logo" showTagline={false} />
    </div>
  );
}
