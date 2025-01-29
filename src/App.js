import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import Profile from './components/Profile/Profile';
import Progress from './components/Progress/Progress';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './styles/index.css';

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('marsCurrentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('marsCurrentUser');
    setUser(null);
  };

  return (
    <Router basename="/quiz-app">
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/register"
          element={
            user ? (
              <Navigate to="/" replace />
            ) : (
              <Register onRegister={handleLogin} />
            )
          }
        />
        <Route
          path="/"
          element={
            user ? (
              <Layout user={user} onLogout={handleLogout}>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/quiz/:courseId/:moduleId/:quizId"
          element={
            user ? (
              <Layout user={user} onLogout={handleLogout}>
                <Quiz user={user} />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/profile"
          element={
            user ? (
              <Layout user={user} onLogout={handleLogout}>
                <Profile user={user} />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/progress"
          element={
            user ? (
              <Layout user={user} onLogout={handleLogout}>
                <Progress userProgress={user.progress || {}} />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
