import React, { useState } from 'react';
import { allCourses } from '../../data/courses';
import CourseView from './CourseView';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'software', name: 'Software Training' },
    { id: 'hardware', name: 'Hardware Training' },
    { id: 'company', name: 'Company & Culture' },
    { id: 'mcc', name: 'MCC' },
    { id: 'sales', name: 'Sales' }
  ];

  const filteredCourses = Object.entries(allCourses).filter(([_, course]) => 
    selectedCategory === 'all' || course.category === selectedCategory
  );

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <h2>Categories</h2>
        <ul className="categories-list">
          {categories.map(category => (
            <li key={category.id}>
              <button 
                className={`category-button ${category.id === selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-main">
        <h1>Select a course to begin your training</h1>
        <div className="course-grid">
          {filteredCourses.map(([id, course]) => (
            <CourseView key={id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
