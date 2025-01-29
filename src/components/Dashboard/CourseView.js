import React from 'react';
import { FaBook, FaQuestionCircle } from 'react-icons/fa';
import { courseCategories } from '../../styles/theme';

const CourseView = ({ course, onQuizSelect }) => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
        <p className="text-text-light">{course.description}</p>
        <div 
          className="mt-2 inline-block px-3 py-1 rounded-full text-sm"
          style={{ 
            backgroundColor: `${courseCategories[course.category].color}20`,
            color: courseCategories[course.category].color 
          }}
        >
          {courseCategories[course.category].name}
        </div>
      </div>

      <div className="grid gap-8">
        {course.modules.map(module => (
          <div key={module.id} className="card">
            <div className="flex items-center gap-4 mb-4">
              <FaBook className="text-2xl text-primary" />
              <div>
                <h2 className="text-xl font-bold">{module.title}</h2>
                <p className="text-text-light">{module.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {module.quizzes.map(quiz => (
                <div 
                  key={quiz.id}
                  className="p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FaQuestionCircle className="text-primary" />
                      <div>
                        <h3 className="font-bold">{quiz.title}</h3>
                        <p className="text-sm text-text-light">{quiz.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-text-light">
                        {quiz.questions.length} questions
                      </div>
                      <button 
                        className="btn btn-primary"
                        onClick={() => onQuizSelect(course.id, quiz)}
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
