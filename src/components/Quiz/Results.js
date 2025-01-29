import React from 'react';
import { FaTrophy, FaClock, FaCheck, FaHome } from 'react-icons/fa';

const Results = ({ score, totalQuestions, correctAnswers, timeBonus, onRestart, onFinish }) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const baseScore = correctAnswers * 100;

  return (
    <div className="card">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
      
      <div className="flex justify-center mb-6">
        <div className="timer" style={{ fontSize: '2rem' }}>
          <FaTrophy className="text-yellow-500" />
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold text-primary mb-2">
          {score} points
        </h3>
        <p className="text-text-light">
          {percentage}% correct ({correctAnswers} out of {totalQuestions})
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
          <div className="flex items-center">
            <FaCheck className="text-success mr-2" />
            <span>Base Score</span>
          </div>
          <span className="font-bold">{baseScore}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-background rounded-lg">
          <div className="flex items-center">
            <FaClock className="text-primary mr-2" />
            <span>Time Bonus</span>
          </div>
          <span className="font-bold">+{timeBonus}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          className="btn btn-primary"
          onClick={onRestart}
          aria-label="Try Again"
        >
          Try Again
        </button>
        
        <button 
          className="btn btn-outline"
          onClick={onFinish}
          aria-label="Back to Quiz Selection"
        >
          <FaHome className="mr-2" />
          Back to Quiz Selection
        </button>
        
        <button 
          className="btn btn-outline"
          onClick={() => {
            const text = `I scored ${score} points (${percentage}% correct) on the quiz!`;
            if (navigator.share) {
              navigator.share({
                title: 'My Quiz Results',
                text: text,
              }).catch(console.error);
            } else {
              navigator.clipboard.writeText(text).then(() => {
                alert('Results copied to clipboard!');
              }).catch(console.error);
            }
          }}
          aria-label="Share Results"
        >
          Share Results
        </button>
      </div>
    </div>
  );
};

export default Results;
