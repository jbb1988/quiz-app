import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';

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
      <div className="container py-8 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Quiz Complete!</h1>
          <div className="text-center mb-8">
            <p className="text-4xl font-bold text-primary mb-2">{percentage.toFixed(0)}%</p>
            <p className="text-text-light">Your Score</p>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span>Correct Answers</span>
              <span className="font-bold">{score}/{quiz.questions.length}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span>Time Bonus Points</span>
              <span className="font-bold text-primary">+{timeBonus}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span>Total Score</span>
              <span className="font-bold">{totalScore}/{quiz.questions.length}</span>
            </div>
          </div>
          <button 
            onClick={handleFinish}
            className="w-full btn btn-primary"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-bold">{quiz.title}</h1>
            <div className="text-text-light">{courseName}</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <div>Question {currentQuestionIndex + 1} of {quiz.questions.length}</div>
            <Timer onComplete={handleTimerComplete} />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>
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
    </div>
  );
};

export default Quiz;
