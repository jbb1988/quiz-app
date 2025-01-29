import React, { useState, useEffect, useCallback } from 'react';
import { questions, shuffleArray } from '../../data/questions';
import Question from './Question';
import Results from './Results';

const TIME_LIMIT = 30; // seconds per question
const TIME_BONUS_FACTOR = 1.67; // 50 points max time bonus (30 seconds * 1.67 = 50)

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeBonus, setTimeBonus] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    startNewQuiz();
  }, []);

  const startNewQuiz = () => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCorrectAnswers(0);
    setTimeBonus(0);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (answer, timeLeft) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      // Base score of 100 points per correct answer
      setScore(prev => prev + 100);
      // Add time bonus for correct answers
      calculateTimeBonus(timeLeft);
    }
  };

  const handleTimeUp = useCallback(() => {
    if (!selectedAnswer) {
      setSelectedAnswer('');
      setShowFeedback(true);
    }
  }, [selectedAnswer]);

  const calculateTimeBonus = (timeLeft) => {
    const bonus = Math.round(timeLeft * TIME_BONUS_FACTOR);
    setTimeBonus(prev => prev + bonus);
    setScore(prev => prev + bonus);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  if (!shuffledQuestions.length) {
    return <div>Loading...</div>;
  }

  if (quizComplete) {
    return (
      <Results
        score={score}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        timeBonus={timeBonus}
        onRestart={startNewQuiz}
      />
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="container">
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
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <Question
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
        showFeedback={showFeedback}
        timeLimit={TIME_LIMIT}
        onTimeUp={handleTimeUp}
      />

      {showFeedback && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleNextQuestion}
            aria-label={
              currentQuestionIndex < questions.length - 1
                ? "Next Question"
                : "Show Results"
            }
          >
            {currentQuestionIndex < questions.length - 1
              ? "Next Question"
              : "Show Results"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
