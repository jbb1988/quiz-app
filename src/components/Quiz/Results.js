import React from 'react';
import '../../styles/components/Quiz.css';

const Results = ({ score, totalQuestions, timeExpired, onRetry, onExit }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassing = percentage >= 70;

  let message;
  if (timeExpired) {
    message = "Time's up! Here's how you did:";
  } else if (isPassing) {
    message = 'Congratulations! You passed the quiz!';
  } else {
    message = 'Keep practicing! You can do better!';
  }

  return (
    <div className="quiz-container">
      <div className="results-container">
        <div className="results-score">
          {score} / {totalQuestions}
          <div style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>
            ({percentage}%)
          </div>
        </div>

        <div className="results-message">
          {message}
        </div>

        <div className="results-actions">
          <button 
            className="btn btn-primary"
            onClick={onRetry}
          >
            Try Again
          </button>
          <button 
            className="btn btn-secondary"
            onClick={onExit}
          >
            Back to Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
