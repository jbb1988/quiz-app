import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import { courses } from './styles/theme';
import { m3SoftwareCourse } from './data/courses/m3-software';

// Add the M3 Software course to our courses
courses.m3_software = m3SoftwareCourse;

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [view, setView] = useState('dashboard'); // 'dashboard', 'quiz'

  const handleQuizSelect = (courseId, quiz) => {
    setSelectedCourse(courses[courseId]);
    setSelectedQuiz(quiz);
    setView('quiz');
  };

  const handleQuizComplete = () => {
    setSelectedQuiz(null);
    setView('dashboard');
  };

  const handleBackToDashboard = () => {
    setSelectedCourse(null);
    setSelectedQuiz(null);
    setView('dashboard');
  };

  // If a quiz is selected, show the quiz component
  if (view === 'quiz' && selectedQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <button 
            className="btn btn-outline mb-4"
            onClick={handleBackToDashboard}
          >
            ← Back to Dashboard
          </button>
          <Quiz 
            quiz={selectedQuiz}
            courseName={selectedCourse.title}
            onComplete={handleQuizComplete}
          />
        </div>
      </div>
    );
  }

  // Otherwise show the dashboard
  return (
    <Dashboard 
      onQuizSelect={handleQuizSelect}
      initialCourse={selectedCourse}
    />
  );
}

export default App;
