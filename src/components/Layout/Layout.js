import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/components/Layout.css';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const user = JSON.parse(localStorage.getItem('marsCurrentUser')) || {
    name: 'Guest',
    email: 'guest@example.com',
    progress: {}
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('marsCurrentUser');
    setMenuOpen(false);
    navigate('/login');
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlayClick = () => {
    setMenuOpen(false);
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    // Ensure path starts with /quiz-app for GitHub Pages
    const fullPath = `/quiz-app${path}`;
    window.location.href = fullPath;
  };

  return (
    <div className="app">
      {!isAuthPage && (
        <>
          <header className="header">
            <button 
              className="hamburger-menu"
              onClick={handleMenuToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <nav className="top-nav">
              <button onClick={() => handleNavigation('/')} className="nav-button">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </button>
              <button onClick={() => handleNavigation('/')} className="nav-button">
                <i className="fas fa-book"></i>
                <span>Courses</span>
              </button>
            </nav>
            <div className="user-info">
              <span>Welcome, {user.name}</span>
            </div>
          </header>

          <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
            <div className="user-profile">
              <div className="avatar">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>

            <div className="progress-summary">
              <h4>Your Progress</h4>
              <div className="stats">
                <div className="stat">
                  <span className="stat-value">{user.progress?.completedCourses || 0}</span>
                  <span className="stat-label">Completed Courses</span>
                </div>
                <div className="stat">
                  <span className="stat-value">
                    {user.progress?.inProgressCourses || 0}
                  </span>
                  <span className="stat-label">Courses in Progress</span>
                </div>
              </div>
            </div>

            <nav className="side-nav">
              <button onClick={() => handleNavigation('/')} className="menu-item">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </button>
              <button onClick={() => handleNavigation('/')} className="menu-item">
                <i className="fas fa-book"></i>
                <span>Courses</span>
              </button>
              <button onClick={() => handleNavigation('/profile')} className="menu-item">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </button>
              <button onClick={() => handleNavigation('/progress')} className="menu-item">
                <i className="fas fa-chart-line"></i>
                <span>Progress</span>
              </button>
            </nav>

            <div className="menu-footer">
              <button onClick={handleLogout} className="logout-button">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
              <div className="version">Version 1.0.0</div>
            </div>
          </div>

          <div 
            className={`overlay ${menuOpen ? 'visible' : ''}`}
            onClick={handleOverlayClick}
            aria-hidden="true"
          />
        </>
      )}
      <main className={`main ${isAuthPage ? 'auth-page' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
