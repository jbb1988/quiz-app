import React from 'react';

const Results = ({ score, totalQuestions, answers, onComplete }) => {
  const percentage = Math.round((score / (totalQuestions * 3)) * 100);
  const baseScore = Object.values(answers).filter(a => a.correct).length;
  const bonusPoints = score - baseScore;

  const getGrade = () => {
    if (percentage >= 90) return { text: 'Excellent!', color: '#48bb78' };
    if (percentage >= 80) return { text: 'Great Job!', color: '#4299e1' };
    if (percentage >= 70) return { text: 'Good Work!', color: '#ed8936' };
    return { text: 'Keep Practicing', color: '#f56565' };
  };

  const grade = getGrade();

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <div className="card text-center">
        <h1 className="text-3xl font-bold mb-8">Quiz Complete!</h1>
        
        <div className="mb-8">
          <div 
            className="text-5xl font-bold mb-2"
            style={{ color: grade.color }}
          >
            {grade.text}
          </div>
          <div className="text-xl text-text-light">
            Your Score: {score} / {totalQuestions * 3} ({percentage}%)
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-background-light rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {baseScore}
            </div>
            <div className="text-sm text-text-light">
              Correct Answers
            </div>
          </div>
          <div className="p-4 bg-background-light rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">
              {bonusPoints}
            </div>
            <div className="text-sm text-text-light">
              Time Bonus Points
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Question Summary</h2>
          <div className="space-y-4">
            {Object.entries(answers).map(([index, answer]) => (
              <div 
                key={index}
                className={`p-4 rounded-lg ${
                  answer.correct 
                    ? 'bg-success-light text-success-dark' 
                    : 'bg-error-light text-error-dark'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Question {Number(index) + 1}</div>
                  <div className="text-sm">
                    {answer.correct ? (
                      <span>
                        +1 {answer.timeBonus > 0 && `(+${answer.timeBonus} bonus)`}
                      </span>
                    ) : (
                      <span>+0</span>
                    )}
                  </div>
                </div>
                <div className="text-sm opacity-75">
                  {answer.correct ? 'Correct' : 'Incorrect'}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={onComplete}
          className="btn btn-primary w-full"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
          }}
        >
          Back to Course
        </button>
      </div>
    </div>
  );
};

export default Results;
