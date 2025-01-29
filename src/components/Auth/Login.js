import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    setError('');
  };

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!formData.password) {
      setError('Please enter your password');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    try {
      // Get existing users from localStorage
      const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
      
      // Check if user exists
      if (users[formData.email]) {
        if (users[formData.email].password === formData.password) {
          // Store current user
          localStorage.setItem('marsCurrentUser', JSON.stringify(users[formData.email]));
          onLogin(users[formData.email]);
          navigate('/');
        } else {
          setError('Invalid password');
        }
      } else {
        setError('No account found with this email');
      }
    } catch (err) {
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Welcome to MARS Learning</h1>
          <p className="text-text-light">Sign in to continue your training</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
