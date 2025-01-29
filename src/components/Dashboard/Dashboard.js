import React from 'react';
import { allCourses } from '../../data/courses';
import { courseCategories } from '../../styles/theme';
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

  // Group courses by category
  const coursesByCategory = Object.entries(allCourses).reduce((acc, [id, course]) => {
    const category = course.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ id, ...course });
    return acc;
  }, {});

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

        {Object.entries(coursesByCategory).map(([category, courses]) => (
          <div key={category}>
            <h2 className="section-header">{courseCategories[category].name}</h2>
            <div className="course-grid">
              {courses.map(course => (
                <CourseView key={course.id} course={course} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
