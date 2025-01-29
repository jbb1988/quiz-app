import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CourseView from './components/Dashboard/CourseView';
import Quiz from './components/Quiz/Quiz';
import { m3SoftwareCourse } from './data/courses/m3-software';

const courses = {
  m3_software: m3SoftwareCourse
};

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleCourseSelect = (courseId) => {
    setCurrentCourse(courses[courseId]);
  };

  const handleQuizSelect = (courseId, quiz) => {
    setCurrentQuiz({
      ...quiz,
      courseName: courses[courseId].title
    });
  };

  const handleQuizComplete = () => {
    setCurrentQuiz(null);
  };

  return (
    <Router basename="/quiz-app">
      <Routes>
        <Route 
          path="/" 
          element={
            <Dashboard 
              courses={courses} 
              onCourseSelect={handleCourseSelect}
            />
          } 
        />
        <Route 
          path="/course/:courseId" 
          element={
            currentCourse ? (
              <CourseView 
                course={currentCourse}
                onQuizSelect={handleQuizSelect}
              />
            ) : (
              <Navigate to="/" />
            )
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
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
