import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses, getCourseById } from '../../data/courses';
import Timer from './Timer';
import '../../styles/components/Quiz.css';

const Quiz = () => {
  const { courseId, moduleId, quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  const course = getCourseById(courseId);
  const module = course?.modules.find(m => m.id === moduleId);
  const quiz = module?.quizzes.find(q => q.id === quizId);
  const questions = quiz?.questions || [];

  useEffect(() => {
    if (!course || !module || !quiz) {
      navigate('/');
    }
  }, [course, module, quiz, navigate]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer === null && !timeUp) {
      setSelectedAnswer(answerIndex);
      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    if (selectedAnswer === null) {
      handleNext();
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeUp(false);
  };

  const handleBackToCourses = () => {
    navigate('/');
  };

  if (!quiz) return null;

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h2>Quiz Complete!</h2>
          <div className="score-circle">
            <div className="score-value">{percentage}%</div>
            <div className="score-label">Score</div>
          </div>
          <div className="score-details">
            <div className="stat">
              <div className="stat-value">{score}</div>
              <div className="stat-label">Correct Answers</div>
            </div>
            <div className="stat">
              <div className="stat-value">{questions.length}</div>
              <div className="stat-label">Total Questions</div>
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={handleRetry} className="retry-button">
              Try Again
            </button>
            <button onClick={handleBackToCourses} className="back-button">
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{quiz.title}</h2>
        <Timer duration={30} onTimeUp={handleTimeUp} />
      </div>
      <div className="question-section">
        <div className="question-count">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].text}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`answer-button ${
              selectedAnswer === index
                ? index === questions[currentQuestion].correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : ''
            } ${selectedAnswer !== null || timeUp ? 'disabled' : ''}`}
            onClick={() => handleAnswerSelect(index)}
            disabled={selectedAnswer !== null || timeUp}
          >
            {option}
          </button>
        ))}
      </div>
      {(selectedAnswer !== null || timeUp) && (
        <button onClick={handleNext} className="next-button">
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  );
};

export default Quiz;
