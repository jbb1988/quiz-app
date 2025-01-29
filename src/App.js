import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CourseView from './components/Dashboard/CourseView';
import Quiz from './components/Quiz/Quiz';
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
          element={
            <div className="container py-8 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6">Profile</h1>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-text-light">Name</label>
                    <div className="font-medium">{user.name}</div>
                  </div>
                  <div>
                    <label className="text-sm text-text-light">Email</label>
                    <div className="font-medium">{user.email}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <Route 
          path="/progress" 
          element={
            <div className="container py-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-bold mb-6">My Progress</h1>
                <div className="space-y-8">
                  {Object.entries(allCourses).map(([courseId, course]) => {
                    const courseProgress = user.progress[courseId];
                    if (!courseProgress) return null;

                    const completedQuizzes = Object.values(courseProgress).length;
                    const totalQuizzes = course.modules.reduce(
                      (total, module) => total + module.quizzes.length,
                      0
                    );
                    const averageScore = Object.values(courseProgress).reduce(
                      (sum, quiz) => sum + (quiz.score / quiz.totalQuestions) * 100,
                      0
                    ) / completedQuizzes;

                    return (
                      <div key={courseId} className="border-b pb-6">
                        <h2 className="text-xl font-bold mb-4">{course.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-text-light mb-1">Completed</div>
                            <div className="text-xl font-bold">
                              {completedQuizzes}/{totalQuizzes}
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-text-light mb-1">Average Score</div>
                            <div className="text-xl font-bold">
                              {averageScore.toFixed(1)}%
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="text-sm text-text-light mb-1">Status</div>
                            <div className="text-xl font-bold">
                              {completedQuizzes === totalQuizzes ? 'Complete' : 'In Progress'}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
