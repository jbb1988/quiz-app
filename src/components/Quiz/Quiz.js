import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from '../../data/courses';
import Question from './Question';
import Results from './Results';
import Timer from './Timer';
import '../../styles/components/Quiz.css';

const Quiz = ({ user }) => {
  const { courseId, moduleId, quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const course = allCourses[courseId];
  const module = course?.modules.find(m => m.id === moduleId);
  const quiz = module?.quizzes.find(q => q.id === quizId);
  const questions = quiz?.questions || [];

  useEffect(() => {
    if (!course || !module || !quiz) {
      navigate('/');
    }
  }, [course, module, quiz, navigate]);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // Add a delay to show feedback before moving to next question
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        completeQuiz(newAnswers);
      }
    }, 1500);
  };

  const handleTimeExpired = () => {
    setTimeExpired(true);
    completeQuiz(answers);
  };

  const completeQuiz = (finalAnswers) => {
    const score = finalAnswers.reduce((total, answer, index) => {
      return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const progress = {
      ...user.progress,
      [courseId]: {
        ...(user.progress?.[courseId] || {}),
        [quizId]: {
          score,
          totalQuestions: questions.length,
          completedAt: new Date().toISOString()
        }
      }
    };

    const updatedUser = {
      ...user,
      progress
    };

    localStorage.setItem('marsCurrentUser', JSON.stringify(updatedUser));
    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    users[user.email] = updatedUser;
    localStorage.setItem('marsUsers', JSON.stringify(users));

    setQuizComplete(true);
  };

  if (!course || !module || !quiz) {
    return null;
  }

  if (quizComplete || timeExpired) {
    return (
      <Results
        score={answers.reduce((total, answer, index) => {
          return total + (answer === questions[index].correctAnswer ? 1 : 0);
        }, 0)}
        totalQuestions={questions.length}
        timeExpired={timeExpired}
        onRetry={() => {
          setCurrentQuestionIndex(0);
          setAnswers([]);
          setQuizComplete(false);
          setTimeExpired(false);
        }}
        onExit={() => navigate('/')}
      />
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2 className="quiz-title">{quiz.title}</h2>
        <div className="quiz-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
              }}
            />
          </div>
          <Timer duration={60} onTimeExpired={handleTimeExpired} />
        </div>
      </div>

      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        number={currentQuestionIndex + 1}
        total={questions.length}
      />
    </div>
  );
};

export default Quiz;
