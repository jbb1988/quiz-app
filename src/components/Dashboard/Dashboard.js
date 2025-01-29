import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses } from '../../data/courses';
import { courseGradients } from '../../styles/theme';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = ['all', 'software', 'hardware', 'company', 'mcc', 'sales'];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  const handleStartCourse = (courseId) => {
    navigate(`/quiz/${courseId}/module-1/quiz-1`);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to MARS Training</h1>
        <p>Select a course to begin your training</p>
      </div>

      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="course-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-header" style={{ background: courseGradients[course.category] }}>
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
  );
};

export default Dashboard;
