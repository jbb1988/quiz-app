import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    
    // Check if user exists
    if (users[email]) {
      if (users[email].password === password) {
        onLogin(users[email]);
        navigate('/');
      } else {
        setError('Invalid password');
      }
    } else {
      setError('User not found');
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Welcome to MARS Learning</h1>
          <p className="text-text-light">Sign in to continue your training</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
              autoComplete="email"
            />
          </div>
          
          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="error">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="btn btn-primary"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-text-light mb-4">Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-outline"
          >
            Create Account
          </button>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-text-light">
            By signing in, you agree to MARS Learning's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
