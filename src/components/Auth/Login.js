import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Auth.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [touched, setTouched] = useState({
    email: false,
    password: false
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
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
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
    setTouched({
      email: true,
      password: true
    });
    
    if (!validateForm()) {
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
      
      if (users[formData.email]) {
        if (users[formData.email].password === formData.password) {
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

  const getValidationMessage = (field) => {
    if (!touched[field]) return '';
    
    switch (field) {
      case 'email':
        if (!formData.email.trim()) return 'Email is required';
        if (!formData.email.includes('@')) return 'Please enter a valid email';
        return '';
      case 'password':
        if (!formData.password) return 'Password is required';
        return '';
      default:
        return '';
    }
  };

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Welcome to MARS Learning</h1>
        <p>Sign in to continue your training</p>
        
        <form onSubmit={handleSubmit} noValidate>
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
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
            {touched.password && getValidationMessage('password') && (
              <div className="validation-message">{getValidationMessage('password')}</div>
            )}
          </div>

          {error && (
            <div className="error">
              {error}
            </div>
          )}
          
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

        <div className="auth-links">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-outline"
          >
            Create Account
          </button>
        </div>

        <div className="terms-text">
          <p>
            By signing in, you agree to MARS Learning's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
