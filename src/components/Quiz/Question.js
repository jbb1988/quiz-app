import React from 'react';
import '../../styles/components/Quiz.css';

const Question = ({ question, onAnswer, number, total }) => {
  if (!question) return null;

  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-count">
          Question {number} of {total}
        </div>
      </div>

      <div className="question-content">
        <h3 className="question-text">{question.text}</h3>
        <div className="options-list">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => onAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
