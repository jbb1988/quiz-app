import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background-light">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
          >
            MARS Learning
          </div>
          <div className="flex items-center gap-4">
            <button 
              className={`btn ${isActive('/profile') ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => navigate('/profile')}
            >
              Profile
            </button>
            <button 
              className={`btn ${isActive('/progress') ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => navigate('/progress')}
            >
              My Progress
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-72px)]">
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
