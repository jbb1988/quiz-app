import React from 'react';
import { allCourses } from '../../data/courses';
import CourseView from './CourseView';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'software', name: 'Software Training' },
    { id: 'hardware', name: 'Hardware Training' },
    { id: 'company', name: 'Company & Culture' },
    { id: 'mcc', name: 'MCC' },
    { id: 'sales', name: 'Sales' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <h2>Categories</h2>
        <ul className="categories-list">
          {categories.map(category => (
            <li key={category.id}>
              <button 
                className={`category-button ${category.id === 'all' ? 'active' : ''}`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-main">
        <h1>Select a course to begin your training</h1>

        {Object.entries(allCourses).map(([id, course]) => (
          <div key={id}>
            <h2 className="section-header">{courseCategories[course.category].name}</h2>
            <div className="course-grid">
              <CourseView course={course} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
