import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';
import { allCourses } from '../../data/courses';
import '../../styles/components/Progress.css';

const Progress = ({ userProgress }) => {
  const navigate = useNavigate();

  const calculateCourseProgress = (courseId) => {
    const course = allCourses[courseId];
    const courseProgress = userProgress[courseId] || {};
    const completedQuizzes = Object.values(courseProgress).length;
    const totalQuizzes = course.modules.reduce(
      (total, module) => total + module.quizzes.length,
      0
    );
    const averageScore = completedQuizzes > 0
      ? Object.values(courseProgress).reduce(
          (sum, quiz) => sum + (quiz.score / quiz.totalQuestions) * 100,
          0
        ) / completedQuizzes
      : 0;

    return {
      completed: completedQuizzes,
      total: totalQuizzes,
      averageScore,
      percentage: (completedQuizzes / totalQuizzes) * 100
    };
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>My Progress</h1>
      </div>
      
      <div className="progress-grid">
        {Object.entries(allCourses).map(([courseId, course]) => {
          const progress = calculateCourseProgress(courseId);
          const category = courseCategories[course.category];

          return (
            <div key={courseId} className="progress-card">
              <div 
                className="progress-card-header"
                style={{ background: category.gradient }}
              >
                <h2>{course.title}</h2>
                <div>{category.name}</div>
              </div>

              <div className="progress-card-body">
                <div className="progress-stats">
                  <div className="stat-box">
                    <div className="stat-label">Completed</div>
                    <div className="stat-value">
                      {progress.completed}/{progress.total}
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Average Score</div>
                    <div className="stat-value">
                      {progress.averageScore.toFixed(1)}%
                    </div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-label">Status</div>
                    <div className="stat-value">
                      {progress.completed === progress.total ? 'Complete' : 'In Progress'}
                    </div>
                  </div>
                </div>

                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${progress.percentage}%`,
                        background: category.gradient
                      }}
                    />
                  </div>
                </div>

                {userProgress[courseId] && (
                  <div className="recent-activity">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                      {Object.entries(userProgress[courseId])
                        .sort((a, b) => new Date(b[1].completedAt) - new Date(a[1].completedAt))
                        .slice(0, 3)
                        .map(([quizId, quiz]) => {
                          const quizDetails = course.modules
                            .flatMap(m => m.quizzes)
                            .find(q => q.id === quizId);

                          return quizDetails ? (
                            <div key={quizId} className="activity-item">
                              <div className="activity-info">
                                <div className="activity-title">{quizDetails.title}</div>
                                <div className="activity-date">
                                  {new Date(quiz.completedAt).toLocaleDateString()}
                                </div>
                              </div>
                              <div className="activity-score">
                                <div className="activity-score-value">
                                  {((quiz.score / quiz.totalQuestions) * 100).toFixed(1)}%
                                </div>
                                <div className="activity-score-details">
                                  {quiz.score}/{quiz.totalQuestions} correct
                                </div>
                              </div>
                            </div>
                          ) : null;
                        })}
                    </div>
                  </div>
                )}
              </div>

              <div className="progress-card-footer">
                <div className="progress-text">
                  Overall Progress: {progress.percentage.toFixed(1)}%
                </div>
                <button 
                  onClick={() => navigate(`/course/${courseId}`)}
                  className="btn btn-primary"
                  style={{ background: category.gradient }}
                >
                  Continue
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progress;
