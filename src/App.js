import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    name: 'Test User',
    email: 'test@example.com',
    progress: {
      completedCourses: 3,
      inProgressCourses: 2,
      recentActivity: [
        {
          id: 1,
          type: 'quiz_completed',
          course: 'M3 Software',
          module: 'Module 1',
          score: 85,
          date: '2025-01-29T14:30:00'
        },
        {
          id: 2,
          type: 'course_started',
          course: 'Hardware Training',
          module: 'Introduction',
          date: '2025-01-28T10:15:00'
        },
        {
          id: 3,
          type: 'achievement_earned',
          achievement: 'Quick Learner',
          description: 'Complete 3 quizzes in one day',
          date: '2025-01-27T16:45:00'
        }
      ],
      achievements: ['Quick Learner', 'Perfect Score', 'Early Bird']
    }
  };

  // Store test user in localStorage
  if (!localStorage.getItem('marsCurrentUser')) {
    localStorage.setItem('marsCurrentUser', JSON.stringify(testUser));
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/quiz/:courseId/:moduleId/:quizId" element={<Quiz user={testUser} />} />
          <Route path="/profile" element={<Profile user={testUser} />} />
          <Route path="/progress" element={<Progress user={testUser} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
