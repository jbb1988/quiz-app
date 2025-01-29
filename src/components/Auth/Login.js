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

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to MARS Learning</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-light mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-text-light mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {error && (
            <div className="text-error text-sm text-center">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-text-light">Don't have an account?</p>
          <button
            onClick={handleRegister}
            className="mt-2 w-full btn btn-outline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
