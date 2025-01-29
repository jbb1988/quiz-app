import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      {!isAuthPage && (
        <header className="header">
          {isMobile && (
            <button 
              className="hamburger-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          )}
          <nav className={`${isMobile ? (menuOpen ? 'open' : '') : ''}`}>
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
