import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import '../../styles/components/Quiz.css';

const Quiz = ({ quiz, courseName, onComplete }) => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeBonus, setTimeBonus] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSubmit = (selectedAnswer) => {
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (showFeedback) {
      const timer = setTimeout(() => {
        setShowFeedback(false);
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          setCompleted(true);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showFeedback, currentQuestionIndex, quiz.questions.length]);

  const handleTimerComplete = (bonusPoints) => {
    setTimeBonus(bonusPoints);
  };

  const handleFinish = () => {
    onComplete();
    navigate('/');
  };

  if (completed) {
    const totalScore = score + timeBonus;
    const percentage = (totalScore / quiz.questions.length) * 100;
    
    return (
      <div className="quiz-container">
        <div className="quiz-results">
          <h1 className="text-2xl font-bold mb-6 text-center">Quiz Complete!</h1>
          <div className="text-center mb-8">
            <p className="results-score">{percentage.toFixed(0)}%</p>
            <p className="results-message">Your Score</p>
          </div>
          <div className="results-stats">
            <div className="stat-card">
              <div className="stat-label">Correct Answers</div>
              <div className="stat-value">{score}/{quiz.questions.length}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Time Bonus Points</div>
              <div className="stat-value text-primary">+{timeBonus}</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Total Score</div>
              <div className="stat-value">{totalScore}/{quiz.questions.length}</div>
            </div>
          </div>
          <button 
            onClick={handleFinish}
            className="btn btn-primary w-full"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="flex justify-between items-center mb-4">
          <h1 className="quiz-title">{quiz.title}</h1>
          <div className="text-text-light">{courseName}</div>
        </div>
        <div className="quiz-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <div>Question {currentQuestionIndex + 1} of {quiz.questions.length}</div>
            <Timer onComplete={handleTimerComplete} />
          </div>
        </div>
      </div>

      <div className="quiz-question">
        <h2 className="question-text">{currentQuestion.question}</h2>
        <div className="quiz-options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleAnswerSubmit(option)}
              className={`quiz-option ${
                showFeedback
                  ? option === currentQuestion.correctAnswer
                    ? 'correct'
                    : option === currentQuestion.options[index]
                      ? 'incorrect'
                      : ''
                  : ''
              }`}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect. The correct answer is: ' + currentQuestion.correctAnswer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
