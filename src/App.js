import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import CourseView from './components/Dashboard/CourseView';
import Quiz from './components/Quiz/Quiz';
import { m3SoftwareCourse } from './data/courses/m3-software';

const courses = {
  m3_software: m3SoftwareCourse
};

const CourseViewWrapper = ({ onQuizSelect }) => {
  const { courseId } = useParams();
  const course = courses[courseId];
  
  if (!course) {
    return <Navigate to="/" />;
  }
  
  return <CourseView course={course} onQuizSelect={onQuizSelect} />;
};

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);

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
            />
          } 
        />
        <Route 
          path="/course/:courseId" 
          element={
            <CourseViewWrapper 
              onQuizSelect={handleQuizSelect}
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
