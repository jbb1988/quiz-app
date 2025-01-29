import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Auth.css';

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
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!formData.password) {
      setError('Please enter a password');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
      
      if (users[formData.email]) {
        setError('An account with this email already exists');
        return;
      }

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        progress: {}
      };

      users[formData.email] = newUser;
      localStorage.setItem('marsUsers', JSON.stringify(users));
      localStorage.setItem('marsCurrentUser', JSON.stringify(newUser));
      
      onRegister(newUser);
      navigate('/');
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Create Account</h1>
        <p>Join MARS Learning to start your training</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input"
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
            />
          </div>

          {error && (
            <div className="error">
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <div className="auth-links">
          <p>Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className="btn btn-outline"
          >
            Sign In
          </button>
        </div>

        <div className="terms-text">
          <p>
            By creating an account, you agree to MARS Learning's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
