import React, { useState } from 'react';
import '../../styles/components/Quiz.css';

const Question = ({ question, onAnswer, number, total }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      onAnswer(index);
    }
  };

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
              className={`option-button ${
                selectedOption === index ? 'selected' : ''
              } ${
                selectedOption !== null
                  ? index === question.correctAnswer
                    ? 'correct'
                    : selectedOption === index
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null}
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
