import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

const Timer = ({ duration, onTimeUp, onTimeChange }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  // Handle timer countdown
  useEffect(() => {
    let timerId;

    if (timeLeft > 0) {
      timerId = setTimeout(() => {
        const newTime = timeLeft - 1;
        setTimeLeft(newTime);
        
        if (newTime === 0) {
          onTimeUp?.();
        } else {
          onTimeChange?.(newTime);
        }
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [timeLeft, onTimeUp, onTimeChange]);

  const timerClasses = classNames('timer', {
    'warning': timeLeft <= 15 && timeLeft > 5,
    'danger': timeLeft <= 5
  });

  return (
    <div className={timerClasses} role="timer" aria-label="Question timer">
      {timeLeft}
    </div>
  );
};

export default Timer;
