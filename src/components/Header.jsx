import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
