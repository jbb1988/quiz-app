import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CourseView from './components/Dashboard/CourseView';
import Quiz from './components/Quiz/Quiz';
import Progress from './components/Progress/Progress';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { allCourses } from './data/courses';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('marsCurrentUser'));
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Public Route wrapper (for login/register)
const PublicRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('marsCurrentUser'));
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const CourseViewWrapper = ({ onQuizSelect }) => {
  const { courseId } = useParams();
  const course = allCourses[courseId];
  
  if (!course) {
    return <Navigate to="/" />;
  }
  
  return <CourseView course={course} onQuizSelect={onQuizSelect} />;
};

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('marsCurrentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('marsCurrentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('marsCurrentUser');
    }
  }, [currentUser]);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleRegister = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentQuiz(null);
  };

  const handleQuizSelect = (courseId, quiz) => {
    setCurrentQuiz({
      ...quiz,
      courseId,
      courseName: allCourses[courseId].title
    });
  };

  const handleQuizComplete = (score, totalQuestions) => {
    const quizId = currentQuiz.id;
    const courseId = currentQuiz.courseId;
    
    // Update user progress
    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    const updatedUser = {
      ...currentUser,
      progress: {
        ...currentUser.progress,
        [courseId]: {
          ...currentUser.progress[courseId],
          [quizId]: {
            completed: true,
            score,
            totalQuestions,
            completedAt: new Date().toISOString()
          }
        }
      }
    };

    // Update both current user and users storage
    users[currentUser.email] = updatedUser;
    localStorage.setItem('marsUsers', JSON.stringify(users));
    setCurrentUser(updatedUser);
    setCurrentQuiz(null);
  };

  const handleUpdateProfile = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login onLogin={handleLogin} />
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <Register onRegister={handleRegister} />
            </PublicRoute>
          } 
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                <Dashboard 
                  courses={allCourses}
                  userProgress={currentUser?.progress}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                <CourseViewWrapper 
                  onQuizSelect={handleQuizSelect}
                  userProgress={currentUser?.progress}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                {currentQuiz ? (
                  <Quiz 
                    quiz={currentQuiz}
                    courseName={currentQuiz.courseName}
                    onComplete={handleQuizComplete}
                    previousAttempt={
                      currentUser?.progress[currentQuiz.courseId]?.[currentQuiz.id]
                    }
                  />
                ) : (
                  <Navigate to="/" />
                )}
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                <Profile 
                  user={currentUser} 
                  onUpdateProfile={handleUpdateProfile}
                />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Layout onLogout={handleLogout}>
                <Progress userProgress={currentUser?.progress} />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route 
          path="*" 
          element={
            currentUser ? (
              <Navigate to="/" replace />
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
