import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
