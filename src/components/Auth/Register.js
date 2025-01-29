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
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
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
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
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
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true
    });

    if (!validateForm()) {
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

  const getValidationMessage = (field) => {
    if (!touched[field]) return '';
    
    switch (field) {
      case 'name':
        if (!formData.name.trim()) return 'Name is required';
        return '';
      case 'email':
        if (!formData.email.trim()) return 'Email is required';
        if (!formData.email.includes('@')) return 'Please enter a valid email';
        return '';
      case 'password':
        if (!formData.password) return 'Password is required';
        if (formData.password.length < 6) return 'Password must be at least 6 characters';
        return '';
      case 'confirmPassword':
        if (!formData.confirmPassword) return 'Please confirm your password';
        if (formData.password !== formData.confirmPassword) return 'Passwords do not match';
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Create Account</h1>
        <p>Join MARS Learning to start your training</p>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${touched.name && getValidationMessage('name') ? 'invalid' : ''}`}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
            {touched.name && getValidationMessage('name') && (
              <div className="validation-message">{getValidationMessage('name')}</div>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${touched.email && getValidationMessage('email') ? 'invalid' : ''}`}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
            {touched.email && getValidationMessage('email') && (
              <div className="validation-message">{getValidationMessage('email')}</div>
            )}
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${touched.password && getValidationMessage('password') ? 'invalid' : ''}`}
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
            {touched.password && getValidationMessage('password') && (
              <div className="validation-message">{getValidationMessage('password')}</div>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${touched.confirmPassword && getValidationMessage('confirmPassword') ? 'invalid' : ''}`}
              placeholder="Confirm your password"
              autoComplete="new-password"
              required
            />
            {touched.confirmPassword && getValidationMessage('confirmPassword') && (
              <div className="validation-message">{getValidationMessage('confirmPassword')}</div>
            )}
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
