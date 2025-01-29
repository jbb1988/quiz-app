import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('marsCurrentUser'));
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background-light">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-sm text-text-light">
            Welcome, {currentUser?.name}
          </div>
          <div className="relative">
            <button 
              className="hamburger-menu p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {menuOpen && (
              <div className="menu-dropdown">
                <button 
                  className={`menu-item ${isActive('/profile') ? 'active' : ''}`}
                  onClick={() => {
                    navigate('/profile');
                    setMenuOpen(false);
                  }}
                >
                  Profile
                </button>
                <button 
                  className={`menu-item ${isActive('/progress') ? 'active' : ''}`}
                  onClick={() => {
                    navigate('/progress');
                    setMenuOpen(false);
                  }}
                >
                  My Progress
                </button>
                <button 
                  className="menu-item text-error"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-64px)]">
        {children}
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center text-text-light">
          © {new Date().getFullYear()} MARS Learning. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
