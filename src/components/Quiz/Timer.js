import React from 'react';
import classNames from 'classnames';

const Timer = ({ timeLeft }) => {
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

export default React.memo(Timer);
