import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Quiz from './components/Quiz/Quiz';
import { courses } from './styles/theme';

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);

  const handleQuizSelect = (courseId, quiz) => {
    setCurrentCourse(courses[courseId]);
    setCurrentQuiz(quiz);
  };

  const handleQuizComplete = () => {
    setCurrentQuiz(null);
    setCurrentCourse(null);
  };

  if (currentQuiz) {
    return (
      <Quiz
        quiz={currentQuiz}
        courseName={currentCourse.title}
        onComplete={handleQuizComplete}
      />
    );
  }

  return (
    <div className="app">
      <Dashboard onQuizSelect={handleQuizSelect} />
    </div>
  );
}

export default App;
