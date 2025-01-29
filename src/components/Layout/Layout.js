import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
      {!isAuthPage && (
        <header className="header">
          <nav>
            <Link to="/" className="nav-button">
              <i className="fas fa-home"></i>
              Home
            </Link>
            <Link to="/" className="nav-button">
              <i className="fas fa-book"></i>
              Courses
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
