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
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!formData.password) {
      setError('Please enter your password');
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

  return (
    <div className="auth-form-container">
      <div className="auth-form">
        <h1>Welcome to MARS Learning</h1>
        <p>Sign in to continue your training</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              required
            />
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

        <div className="mt-8 text-center">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-outline"
          >
            Create Account
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">
            By signing in, you agree to MARS Learning's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
