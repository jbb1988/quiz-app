import React from 'react';
import classNames from 'classnames';
import Timer from './Timer';

const Question = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer, 
  showFeedback,
  timeLeft
}) => {
  const getOptionClass = (option) => {
    if (!showFeedback) {
      return classNames('option', {
        'selected': option === selectedAnswer
      });
    }
    
    if (option === question.correctAnswer) {
      return 'option correct';
    }
    
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'option incorrect';
    }
    
    return 'option';
  };

  return (
    <div className="card">
      <Timer timeLeft={timeLeft} />
      
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(option)}
            onClick={() => !showFeedback && onSelectAnswer(option)}
            disabled={showFeedback}
            aria-selected={option === selectedAnswer}
            role="option"
          >
            {option}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={classNames('feedback', {
          'correct': selectedAnswer === question.correctAnswer,
          'incorrect': selectedAnswer !== question.correctAnswer
        })}>
          <p>
            {selectedAnswer === question.correctAnswer 
              ? '✓ Correct!' 
              : `✗ Incorrect. The correct answer is: ${question.correctAnswer}`}
          </p>
          <p className="mt-2">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(Question);
