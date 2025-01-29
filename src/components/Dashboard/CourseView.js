import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';

const CourseView = ({ course }) => {
  const navigate = useNavigate();
  const category = courseCategories[course.category];

  const handleCardClick = () => {
    if (course.modules && course.modules.length > 0 && course.modules[0].quizzes && course.modules[0].quizzes.length > 0) {
      const moduleId = course.modules[0].id;
      const quizId = course.modules[0].quizzes[0].id;
      navigate(`/quiz/${course.id}/${moduleId}/${quizId}`);
    }
  };

  return (
    <div className="course-card" onClick={handleCardClick} role="button" tabIndex={0}>
      <div 
        className="course-card-header"
        style={{ background: category.gradient }}
      >
        <h3>{course.title}</h3>
        {course.subtitle && <p>{course.subtitle}</p>}
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
        <div 
          className="btn btn-primary"
          style={{ background: category.gradient }}
        >
          Start
        </div>
      </div>
    </div>
  );
};

export default CourseView;
