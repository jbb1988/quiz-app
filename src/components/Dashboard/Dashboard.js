import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';
import { gradients } from '../../styles/theme';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStartCourse = (courseId) => {
    navigate(`/quiz/${courseId}/module-1/quiz-1`);
  };

  const getCategoryGradient = (category) => {
    switch (category) {
      case 'software':
        return gradients.primary;
      case 'hardware':
        return gradients.success;
      case 'company':
        return gradients.secondary;
      case 'mcc':
        return gradients.danger;
      case 'sales':
        return gradients.warning;
      default:
        return gradients.primary;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to MARS Training</h1>
        <p>Select a course to begin your training</p>
      </div>

      <div className="dashboard-content">
        <aside className="categories">
          <h2>Categories</h2>
          <div className="category-list">
            <button className="category-button active">All Courses</button>
            <button className="category-button">Software Training</button>
            <button className="category-button">Hardware Training</button>
            <button className="category-button">Company & Culture</button>
            <button className="category-button">MCC</button>
            <button className="category-button">Sales</button>
          </div>
        </aside>

        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div 
                className="course-header"
                style={{ background: getCategoryGradient(course.category) }}
              >
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
      </div>
    </div>
  );
};

export default Dashboard;
