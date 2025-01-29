import React, { useState, useEffect, useCallback } from 'react';
import Question from './Question';
import Results from './Results';

const TIME_LIMIT = 30; // seconds per question
const TIME_BONUS_FACTOR = 1.67; // 50 points max time bonus (30 seconds * 1.67 = 50)

const Quiz = ({ quiz, courseName, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeBonus, setTimeBonus] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);

  const handleTimeUp = useCallback(() => {
    if (!selectedAnswer && !showFeedback) {
      setSelectedAnswer('');
      setShowFeedback(true);
    }
  }, [selectedAnswer, showFeedback]);

  // Reset timer when moving to a new question
  useEffect(() => {
    setTimeLeft(TIME_LIMIT);
  }, [currentQuestionIndex]);

  // Timer effect
  useEffect(() => {
    let timerId;
    
    if (!showFeedback && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timeLeft, showFeedback, handleTimeUp]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      // Base score of 100 points per correct answer
      setScore(prev => prev + 100);
      // Add time bonus for correct answers
      const bonus = Math.round(timeLeft * TIME_BONUS_FACTOR);
      setTimeBonus(prev => prev + bonus);
      setScore(prev => prev + bonus);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCorrectAnswers(0);
    setTimeBonus(0);
    setQuizComplete(false);
    setTimeLeft(TIME_LIMIT);
  };

  if (quizComplete) {
    return (
      <Results
        score={score}
        totalQuestions={quiz.questions.length}
        correctAnswers={correctAnswers}
        timeBonus={timeBonus}
        onRestart={handleRestartQuiz}
        onFinish={onComplete}
      />
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="container">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-primary mb-2">{quiz.title}</h2>
        <p className="text-text-light">{courseName}</p>
      </div>

      <div className="progress">
        <div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      <div className="text-center mb-4">
        <p className="text-text-light">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
      </div>

      <Question
        key={currentQuestionIndex}
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
        showFeedback={showFeedback}
        timeLeft={timeLeft}
      />

      {showFeedback && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleNextQuestion}
            aria-label={
              currentQuestionIndex < quiz.questions.length - 1
                ? "Next Question"
                : "Show Results"
            }
          >
            {currentQuestionIndex < quiz.questions.length - 1
              ? "Next Question"
              : "Show Results"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
