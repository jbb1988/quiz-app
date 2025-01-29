import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';
import { allCourses } from '../../data/courses';

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
    <div className="container py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Progress</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(allCourses).map(([courseId, course]) => {
          const progress = calculateCourseProgress(courseId);
          const category = courseCategories[course.category];

          return (
            <div key={courseId} className="progress-card">
              <div 
                className="progress-card-header"
                style={{ background: category.gradient }}
              >
                <h2 className="text-xl font-bold text-white mb-1">{course.title}</h2>
                <div className="text-white opacity-90">{category.name}</div>
              </div>

              <div className="progress-card-body">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-text-light mb-1">Completed</div>
                    <div className="text-lg font-bold">
                      {progress.completed}/{progress.total}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-text-light mb-1">Average Score</div>
                    <div className="text-lg font-bold">
                      {progress.averageScore.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-text-light mb-1">Status</div>
                    <div className="text-lg font-bold">
                      {progress.completed === progress.total ? 'Complete' : 'In Progress'}
                    </div>
                  </div>
                </div>

                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
                  <div 
                    className="absolute top-0 left-0 h-full transition-all duration-500 rounded-full"
                    style={{ 
                      width: `${progress.percentage}%`,
                      background: category.gradient
                    }}
                  />
                </div>

                {userProgress[courseId] && (
                  <div>
                    <h3 className="text-lg font-bold mb-3">Recent Activity</h3>
                    <div className="space-y-2">
                      {Object.entries(userProgress[courseId])
                        .sort((a, b) => new Date(b[1].completedAt) - new Date(a[1].completedAt))
                        .slice(0, 3)
                        .map(([quizId, quiz]) => {
                          const quizDetails = course.modules
                            .flatMap(m => m.quizzes)
                            .find(q => q.id === quizId);

                          return quizDetails ? (
                            <div 
                              key={quizId}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div>
                                <div className="font-medium">{quizDetails.title}</div>
                                <div className="text-sm text-text-light">
                                  {new Date(quiz.completedAt).toLocaleDateString()}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-bold">
                                  {((quiz.score / quiz.totalQuestions) * 100).toFixed(1)}%
                                </div>
                                <div className="text-sm text-text-light">
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
                <div className="text-sm text-text-light">
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
