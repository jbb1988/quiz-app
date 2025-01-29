import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

  const handleLogout = () => {
    localStorage.removeItem('marsCurrentUser');
    navigate('/login');
  };

  const completedCourses = Object.values(user.progress || {}).filter(
    course => course.completed
  ).length;

  return (
    <div className="app">
      {!isAuthPage && (
        <>
          <header className="header">
            <button 
              className="hamburger-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <nav className="top-nav">
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
                  <span className="stat-value">{completedCourses}</span>
                  <span className="stat-label">Completed Courses</span>
                </div>
                <div className="stat">
                  <span className="stat-value">
                    {Object.keys(user.progress || {}).length}
                  </span>
                  <span className="stat-label">Courses in Progress</span>
                </div>
              </div>
            </div>

            <nav className="side-nav">
              <Link to="/" className="menu-item">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to="/" className="menu-item">
                <i className="fas fa-book"></i>
                <span>Courses</span>
              </Link>
              <Link to="/profile" className="menu-item">
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </Link>
              <Link to="/progress" className="menu-item">
                <i className="fas fa-chart-line"></i>
                <span>Progress</span>
              </Link>
            </nav>

            <div className="menu-footer">
              <button onClick={handleLogout} className="logout-button">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </button>
              <div className="version">Version 1.0.0</div>
            </div>
          </div>

          {menuOpen && (
            <div 
              className="overlay" 
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}
        </>
      )}
      <main className={`main ${isAuthPage ? 'auth-page' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
