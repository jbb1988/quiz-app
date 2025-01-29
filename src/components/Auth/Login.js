import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Auth.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    const user = users[formData.email];

    if (!user || user.password !== formData.password) {
      setErrors({
        ...errors,
        auth: 'Invalid email or password'
      });
      return;
    }

    localStorage.setItem('marsCurrentUser', JSON.stringify(user));
    onLogin(user);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome to MARS Learning</h1>
          <p>Sign in to continue your training</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && (
              <div className="error-message">
                ⚠ {errors.email}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? 'error' : ''}
            />
            {errors.password && (
              <div className="error-message">
                ⚠ {errors.password}
              </div>
            )}
          </div>

          {errors.auth && (
            <div className="error-message auth-error">
              ⚠ {errors.auth}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>

          <div className="auth-links">
            <p>
              Don't have an account?{' '}
              <Link to="/register">Register here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
