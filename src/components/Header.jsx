import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="header">
      <Link to="/home" aria-label="Go to home">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <button type="button" className="logout-btn" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
