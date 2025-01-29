import React from 'react';
import { quizzes } from '../../data/quizzes';

const QuizSelection = ({ onSelectQuiz }) => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        Choose a Quiz
      </h1>
      <div className="grid gap-4">
        {quizzes.map(quiz => (
          <button
            key={quiz.id}
            className="card hover:shadow-lg transition-shadow cursor-pointer text-left"
            onClick={() => onSelectQuiz(quiz.id)}
          >
            <h2 className="text-xl font-bold mb-2">{quiz.title}</h2>
            <p className="text-text-light">{quiz.description}</p>
            <div className="mt-4 flex items-center text-sm text-text-light">
              <span>{quiz.questions.length} questions</span>
              <span className="mx-2">•</span>
              <span>30 seconds per question</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSelection;
