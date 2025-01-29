import React, { useState, useEffect } from 'react';
import '../../styles/components/Quiz.css';

const Timer = ({ duration, onTimeExpired }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeExpired();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeExpired]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / duration) * 100;
  const isWarning = percentage <= 25;

  return (
    <div className="timer">
      <span>Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}</span>
      <div className="timer-bar">
        <div
          className={`timer-fill ${isWarning ? 'warning' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Timer;
