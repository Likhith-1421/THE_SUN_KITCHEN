import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="app-container fade-in">
      <Header />
      <div className="page-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
