import React, { useState, useEffect } from 'react';
import Question from './Question';
import Results from './Results';
import Timer from './Timer';

const Quiz = ({ quiz, courseName, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !showFeedback && !isQuizComplete) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showFeedback && !isQuizComplete) {
      handleAnswerSubmit(null);
    }
  }, [timeLeft, showFeedback, isQuizComplete]);

  const handleAnswerSubmit = (selectedAnswer) => {
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: {
        selected: selectedAnswer,
        correct,
        timeBonus: timeLeft > 20 ? 2 : timeLeft > 10 ? 1 : 0
      }
    }));

    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      const timeBonus = timeLeft > 20 ? 2 : timeLeft > 10 ? 1 : 0;
      setScore(prev => prev + 1 + timeBonus);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTimeLeft(30);
      } else {
        setIsQuizComplete(true);
      }
    }, 2000);
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];

  if (isQuizComplete) {
    return (
      <Results 
        score={score} 
        totalQuestions={quiz.questions.length} 
        answers={answers}
        onComplete={onComplete}
      />
    );
  }

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">{quiz.title}</h1>
        <p className="text-text-light">{courseName}</p>
      </div>

      <div className="mb-8">
        <div className="progress mb-4">
          <div 
            className="progress-bar"
            style={{ 
              width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
              transition: 'width 0.5s ease-in-out'
            }}
          />
        </div>
        <div className="text-center text-sm text-text-light">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </div>
      </div>

      <Timer 
        timeLeft={timeLeft} 
        warning={timeLeft <= 10} 
        danger={timeLeft <= 5}
      />

      <Question
        question={currentQuestion}
        onAnswer={handleAnswerSubmit}
        showFeedback={showFeedback}
        isCorrect={isCorrect}
        selectedAnswer={answers[currentQuestionIndex]?.selected}
        disabled={showFeedback}
      />

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="font-bold mb-2">
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </div>
          <div>
            {currentQuestion.explanation}
          </div>
          {isCorrect && timeLeft > 10 && (
            <div className="mt-2 text-sm">
              Time Bonus: +{timeLeft > 20 ? 2 : 1} points
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
