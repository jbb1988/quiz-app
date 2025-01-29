import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';

const CourseView = ({ course }) => {
  const navigate = useNavigate();
  const category = courseCategories[course.category];

  const handleStartQuiz = () => {
    if (course.modules && course.modules.length > 0 && course.modules[0].quizzes && course.modules[0].quizzes.length > 0) {
      navigate(`/quiz/${course.id}/${course.modules[0].id}/${course.modules[0].quizzes[0].id}`);
    }
  };

  return (
    <div className="course-card">
      <div 
        className="course-card-header"
        style={{ background: category.gradient }}
      >
        <h3>{course.title}</h3>
        <p>{category.name}</p>
      </div>
      <div className="course-card-body">
        <p>{course.description}</p>
      </div>
      <div className="course-card-footer">
        <div>
          {course.modules && course.modules.length > 0 && (
            <span>{course.modules.length} module{course.modules.length !== 1 ? 's' : ''}</span>
          )}
        </div>
        <button 
          className="btn btn-primary"
          onClick={handleStartQuiz}
          style={{ background: category.gradient }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default CourseView;
