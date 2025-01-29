import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CourseView from './components/Dashboard/CourseView';
import Quiz from './components/Quiz/Quiz';
import Progress from './components/Progress/Progress';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import { allCourses } from './data/courses';

// Mock user data - in a real app, this would come from a backend
const MOCK_USER = {
  id: 'user123',
  name: 'Test User',
  email: 'test@example.com',
  progress: {}
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
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('marsUser');
    return savedUser ? JSON.parse(savedUser) : MOCK_USER;
  });

  useEffect(() => {
    localStorage.setItem('marsUser', JSON.stringify(user));
  }, [user]);

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
    
    setUser(prevUser => {
      const newProgress = {
        ...prevUser.progress,
        [courseId]: {
          ...prevUser.progress[courseId],
          [quizId]: {
            completed: true,
            score,
            totalQuestions,
            completedAt: new Date().toISOString()
          }
        }
      };

      return {
        ...prevUser,
        progress: newProgress
      };
    });

    setCurrentQuiz(null);
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
              <Dashboard 
                courses={allCourses}
                userProgress={user.progress}
              />
            } 
          />
          <Route 
            path="/course/:courseId" 
            element={
              <CourseViewWrapper 
                onQuizSelect={handleQuizSelect}
                userProgress={user.progress}
              />
            }
          />
          <Route 
            path="/quiz" 
            element={
              currentQuiz ? (
                <Quiz 
                  quiz={currentQuiz}
                  courseName={currentQuiz.courseName}
                  onComplete={handleQuizComplete}
                  previousAttempt={
                    user.progress[currentQuiz.courseId]?.[currentQuiz.id]
                  }
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route 
            path="/profile" 
            element={<Profile user={user} />}
          />
          <Route 
            path="/progress" 
            element={<Progress userProgress={user.progress} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
