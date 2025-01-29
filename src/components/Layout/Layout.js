import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  // Bypass authentication for testing
  const testUser = {
    name: 'Test User'
  };

  return (
    <div className="app">
      {!isAuthPage && (
        <header className="header">
          <nav>
            <Link to="/" className="nav-button">
              <i className="fas fa-home"></i>
              Home
            </Link>
            <Link to="/courses" className="nav-button">
              <i className="fas fa-book"></i>
              Courses
            </Link>
          </nav>
          <div className="user-info">
            <span>Welcome, {testUser.name}</span>
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
