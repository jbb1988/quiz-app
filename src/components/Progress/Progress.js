import React from 'react';
import { approvedDesigns } from '../../styles/theme';
import '../../styles/components/Progress.css';

const Progress = ({ user }) => {
  const mockProgress = {
    totalCourses: 10,
    completedCourses: 3,
    inProgressCourses: 2,
    recentActivity: [
      {
        id: 1,
        type: 'quiz_completed',
        course: 'M3 Software',
        module: 'Module 1',
        score: 85,
        date: '2025-01-29T14:30:00'
      },
      {
        id: 2,
        type: 'course_started',
        course: 'Hardware Training',
        module: 'Introduction',
        date: '2025-01-28T10:15:00'
      },
      {
        id: 3,
        type: 'achievement_earned',
        achievement: 'Quick Learner',
        description: 'Complete 3 quizzes in one day',
        date: '2025-01-27T16:45:00'
      }
    ]
  };

  const calculateProgress = () => {
    return (mockProgress.completedCourses / mockProgress.totalCourses) * 100;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'quiz_completed':
        return 'fa-check-circle';
      case 'course_started':
        return 'fa-play-circle';
      case 'achievement_earned':
        return 'fa-trophy';
      default:
        return 'fa-circle';
    }
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Learning Progress</h1>
      </div>

      <div className="progress-content">
        <div className="progress-section">
          <div className="progress-stats">
            <div className="stat-card">
              <div className="stat-value">{mockProgress.completedCourses}</div>
              <div className="stat-label">Completed Courses</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{mockProgress.inProgressCourses}</div>
              <div className="stat-label">In Progress</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{mockProgress.totalCourses}</div>
              <div className="stat-label">Total Courses</div>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-label">
              <span>Overall Progress</span>
              <span>{calculateProgress()}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="progress-section">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {mockProgress.recentActivity.map(activity => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <i className={`fas ${getActivityIcon(activity.type)}`}></i>
                </div>
                <div className="activity-details">
                  {activity.type === 'quiz_completed' && (
                    <>
                      <h3>Completed Quiz</h3>
                      <p>{activity.course} - {activity.module}</p>
                      <p className="activity-score">Score: {activity.score}%</p>
                    </>
                  )}
                  {activity.type === 'course_started' && (
                    <>
                      <h3>Started New Course</h3>
                      <p>{activity.course}</p>
                      <p>{activity.module}</p>
                    </>
                  )}
                  {activity.type === 'achievement_earned' && (
                    <>
                      <h3>{activity.achievement}</h3>
                      <p>{activity.description}</p>
                    </>
                  )}
                </div>
                <div className="activity-time">
                  {formatDate(activity.date)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="progress-section">
          <h2>Achievements</h2>
          <div className="achievements-grid">
            {['Quick Learner', 'Perfect Score', 'Early Bird'].map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>{achievement}</h3>
                <p>Achievement unlocked!</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
