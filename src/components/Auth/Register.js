import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!formData.password) {
      setError('Please enter a password');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
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

    // Get existing users
    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    
    // Check if user already exists
    if (users[formData.email]) {
      setError('User already exists with this email');
      return;
    }

    // Create new user
    const newUser = {
      id: `user_${Date.now()}`,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      progress: {},
      createdAt: new Date().toISOString()
    };

    try {
      // Save to localStorage
      users[formData.email] = newUser;
      localStorage.setItem('marsUsers', JSON.stringify(users));
      localStorage.setItem('marsCurrentUser', JSON.stringify(newUser));

      // Call onRegister callback
      onRegister(newUser);
      
      // Navigate to dashboard
      navigate('/');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-text-light">Join MARS Learning to start your training</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your full name"
              required
              autoComplete="name"
            />
          </div>
          
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
              placeholder="Create a password"
              required
              minLength={6}
              autoComplete="new-password"
            />
            <p className="mt-2 text-xs text-text-light">
              Must be at least 6 characters long
            </p>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="Confirm your password"
              required
              minLength={6}
              autoComplete="new-password"
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
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-text-light mb-4">Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-outline"
          >
            Sign In
          </button>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-sm text-text-light">
            By creating an account, you agree to MARS Learning's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
