import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
      {!isAuthPage && (
        <header className="header">
          <button 
            className="hamburger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <nav className={menuOpen ? 'open' : ''}>
            <Link to="/" className="nav-button">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link to="/" className="nav-button">
              <i className="fas fa-book"></i>
              <span>Courses</span>
            </Link>
          </nav>
          <div className="user-info">
            <span>Welcome, {JSON.parse(localStorage.getItem('marsCurrentUser'))?.name || 'Guest'}</span>
          </div>
        </header>
      )}
      <main className={`main ${isAuthPage ? 'auth-page' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
