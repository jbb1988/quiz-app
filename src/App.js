import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Quiz from './components/Quiz/Quiz';
import Profile from './components/Profile/Profile';
import Progress from './components/Progress/Progress';
import Layout from './components/Layout/Layout';

const App = () => {
  // Bypass authentication for testing
  const testUser = {
    email: 'test@example.com',
    name: 'Test User',
    progress: {}
  };

  return (
    <Router basename="/quiz-app">
      <Layout>
        <Routes>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz/:courseId/:moduleId/:quizId" element={<Quiz user={testUser} />} />
          <Route path="/profile" element={<Profile user={testUser} />} />
          <Route path="/progress" element={<Progress user={testUser} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
