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
    return <Navigate to="/login" />;
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

  if (!currentUser) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Layout onLogout={handleLogout}>
        <Routes>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Dashboard 
                  courses={allCourses}
                  userProgress={currentUser.progress}
                />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/course/:courseId" 
            element={
              <ProtectedRoute>
                <CourseViewWrapper 
                  onQuizSelect={handleQuizSelect}
                  userProgress={currentUser.progress}
                />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/quiz" 
            element={
              <ProtectedRoute>
                {currentQuiz ? (
                  <Quiz 
                    quiz={currentQuiz}
                    courseName={currentQuiz.courseName}
                    onComplete={handleQuizComplete}
                    previousAttempt={
                      currentUser.progress[currentQuiz.courseId]?.[currentQuiz.id]
                    }
                  />
                ) : (
                  <Navigate to="/" />
                )}
              </ProtectedRoute>
            }
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile user={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/progress" 
            element={
              <ProtectedRoute>
                <Progress userProgress={currentUser.progress} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
