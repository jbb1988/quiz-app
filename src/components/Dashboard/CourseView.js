import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';

const CourseView = () => {
  const navigate = useNavigate();

  const handleStartCourse = (courseId) => {
    navigate(`/quiz/${courseId}/module-1/quiz-1`);
  };

  return (
    <div className="course-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <div className="course-header" style={{ background: `var(--gradient-${course.category})` }}>
            <h2>{course.title}</h2>
            {course.description && <p>{course.description}</p>}
          </div>
          <div className="course-content">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(course.progress.completed / course.progress.total) * 100}%`
                }}
              ></div>
            </div>
            <div className="course-stats">
              <div className="stat-item">
                <div className="stat-value">{course.progress.completed}</div>
                <div className="stat-label">Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{course.progress.total}</div>
                <div className="stat-label">Total Modules</div>
              </div>
            </div>
            <div className="course-action">
              <button
                className="start-button"
                onClick={() => handleStartCourse(course.id)}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseView;
