import React from 'react';

const Timer = ({ timeLeft, warning, danger }) => {
  const getTimerClass = () => {
    if (danger) return 'timer danger';
    if (warning) return 'timer warning';
    return 'timer';
  };

  const getTimerStyle = () => {
    const baseStyle = {
      transform: 'scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };

    if (danger) {
      return {
        ...baseStyle,
        transform: 'scale(1.1)',
        animation: 'pulse 1s infinite'
      };
    }

    return baseStyle;
  };

  return (
    <div 
      className={getTimerClass()}
      style={getTimerStyle()}
    >
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="text-sm uppercase tracking-wider mb-1">Time Remaining</div>
      <div className="text-4xl font-bold">{timeLeft}</div>
      {timeLeft > 20 && (
        <div className="text-sm mt-1">
          Answer quickly for bonus points!
        </div>
      )}
      {timeLeft <= 20 && timeLeft > 10 && (
        <div className="text-sm mt-1">
          Still time for a bonus point!
        </div>
      )}
      {timeLeft <= 10 && (
        <div className="text-sm mt-1">
          Hurry up!
        </div>
      )}
    </div>
  );
};

export default Timer;
