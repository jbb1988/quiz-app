import React, { useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import QuizSelection from './components/Quiz/QuizSelection';
import { getQuizById } from './data/quizzes';

function App() {
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const selectedQuiz = selectedQuizId ? getQuizById(selectedQuizId) : null;

  const handleQuizSelect = (quizId) => {
    setSelectedQuizId(quizId);
  };

  const handleQuizComplete = () => {
    setSelectedQuizId(null);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <header className="container text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">LMS Quiz App</h1>
        <p className="text-text-light">
          Test your knowledge with our interactive quizzes!
        </p>
      </header>

      <main>
        {selectedQuiz ? (
          <Quiz quiz={selectedQuiz} onComplete={handleQuizComplete} />
        ) : (
          <QuizSelection onSelectQuiz={handleQuizSelect} />
        )}
      </main>

      <footer className="container text-center mt-8 text-text-light">
        <p>
          Built with React - Perfect for embedding in Notion and other LMS platforms
        </p>
      </footer>
    </div>
  );
}

export default App;
