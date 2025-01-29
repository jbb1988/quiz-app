import React from 'react';
import { courseCategories } from '../../styles/theme';

const CourseView = ({ course, onQuizSelect }) => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <div 
            className="inline-block px-3 py-1 rounded-full text-sm"
            style={{ 
              backgroundColor: `${courseCategories[course.category].color}20`,
              color: courseCategories[course.category].color 
            }}
          >
            {courseCategories[course.category].name}
          </div>
        </div>
        <p className="text-text-light text-lg">{course.description}</p>
      </div>

      <div className="space-y-8">
        {course.modules.map(module => (
          <div key={module.id} className="card">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-primary mb-2">{module.title}</h2>
              <p className="text-text-light">{module.description}</p>
            </div>

            <div className="space-y-4">
              {module.quizzes.map(quiz => (
                <div 
                  key={quiz.id}
                  className="quiz-item"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <h3 className="quiz-item-title mb-1">{quiz.title}</h3>
                      <p className="quiz-item-description">{quiz.description}</p>
                    </div>
                    <div className="flex items-center gap-6 ml-4">
                      <div className="text-sm font-medium" style={{ color: courseCategories[course.category].color }}>
                        {quiz.questions?.length || 0} questions
                      </div>
                      <button 
                        className="btn btn-primary"
                        onClick={() => onQuizSelect(course.id, quiz)}
                        style={{
                          background: courseCategories[course.category].gradient,
                          minWidth: '140px'
                        }}
                      >
                        Start Quiz
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseView;
