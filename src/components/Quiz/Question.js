import React from 'react';

const Question = ({ 
  question, 
  onAnswer, 
  showFeedback, 
  isCorrect, 
  selectedAnswer,
  disabled 
}) => {
  const getOptionClass = (option) => {
    const baseClass = 'option';
    if (!showFeedback && selectedAnswer === option) {
      return `${baseClass} selected`;
    }
    if (showFeedback) {
      if (option === question.correctAnswer) {
        return `${baseClass} correct`;
      }
      if (selectedAnswer === option && option !== question.correctAnswer) {
        return `${baseClass} incorrect`;
      }
    }
    return baseClass;
  };

  const getOptionStyle = (option) => {
    const baseStyle = {
      transform: 'translateY(0)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };

    if (showFeedback) {
      if (option === question.correctAnswer) {
        return {
          ...baseStyle,
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 6px rgba(72, 187, 120, 0.2)'
        };
      }
      if (selectedAnswer === option && option !== question.correctAnswer) {
        return {
          ...baseStyle,
          transform: 'translateY(0)',
          boxShadow: '0 4px 6px rgba(245, 101, 101, 0.2)'
        };
      }
    }

    return baseStyle;
  };

  return (
    <div className="card">
      <h2 className="text-xl font-bold mb-6">{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(option)}
            onClick={() => !disabled && onAnswer(option)}
            disabled={disabled}
            style={getOptionStyle(option)}
          >
            <div className="flex items-start">
              <div className="text-lg font-medium flex-grow">
                {option}
              </div>
              {showFeedback && option === question.correctAnswer && (
                <div className="ml-4 text-success-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
              {showFeedback && selectedAnswer === option && option !== question.correctAnswer && (
                <div className="ml-4 text-error-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
