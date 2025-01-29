import React from 'react';
import { FaTrophy, FaClock, FaCheckCircle, FaRedo, FaHome } from 'react-icons/fa';

const Results = ({ 
  score, 
  totalQuestions, 
  correctAnswers, 
  timeBonus, 
  onRestart, 
  onFinish 
}) => {
  const baseScore = correctAnswers * 100;
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;
  
  const getPerformanceMessage = () => {
    if (percentageCorrect === 100) return "Perfect Score! Outstanding work!";
    if (percentageCorrect >= 80) return "Excellent work! Keep it up!";
    if (percentageCorrect >= 60) return "Good job! Room for improvement.";
    return "Keep practicing! You'll get better.";
  };

  const getGrade = () => {
    if (percentageCorrect >= 90) return { letter: 'A', color: '#48bb78' };
    if (percentageCorrect >= 80) return { letter: 'B', color: '#4299e1' };
    if (percentageCorrect >= 70) return { letter: 'C', color: '#ecc94b' };
    if (percentageCorrect >= 60) return { letter: 'D', color: '#ed8936' };
    return { letter: 'F', color: '#f56565' };
  };

  const grade = getGrade();

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div 
          className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
          style={{ backgroundColor: grade.color + '20', color: grade.color }}
        >
          <FaTrophy className="text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-text-light">{getPerformanceMessage()}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-4xl font-bold text-primary mb-2">
            {grade.letter}
          </div>
          <div className="text-text-light">Grade</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-4xl font-bold text-primary mb-2">
            {Math.round(percentageCorrect)}%
          </div>
          <div className="text-text-light">Accuracy</div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 bg-background rounded-lg">
          <div className="flex items-center">
            <FaCheckCircle className="text-primary mr-3" />
            <span>Correct Answers</span>
          </div>
          <div className="font-bold">
            {correctAnswers} of {totalQuestions}
          </div>
        </div>
        
        <div className="flex justify-between items-center p-4 bg-background rounded-lg">
          <div className="flex items-center">
            <FaTrophy className="text-primary mr-3" />
            <span>Base Score</span>
          </div>
          <div className="font-bold">{baseScore} points</div>
        </div>

        <div className="flex justify-between items-center p-4 bg-background rounded-lg">
          <div className="flex items-center">
            <FaClock className="text-primary mr-3" />
            <span>Time Bonus</span>
          </div>
          <div className="font-bold">+{timeBonus} points</div>
        </div>

        <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg">
          <div className="font-bold">Total Score</div>
          <div className="text-2xl font-bold">{score} points</div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button 
          className="btn btn-outline flex items-center gap-2"
          onClick={onRestart}
        >
          <FaRedo />
          Try Again
        </button>
        <button 
          className="btn btn-primary flex items-center gap-2"
          onClick={onFinish}
        >
          <FaHome />
          Back to Courses
        </button>
      </div>
    </div>
  );
};

export default Results;
