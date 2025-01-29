import React from 'react';
import { allCourses } from '../../data/courses';
import CourseView from './CourseView';
import '../../styles/components/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <h2>Categories</h2>
        <ul className="categories-list">
          <li>
            <button className="category-button active">
              All Courses
            </button>
          </li>
        </ul>
      </div>

      <div className="dashboard-main">
        <h1>Available Courses</h1>
        <p>Select a course to begin your training</p>

        <div className="course-grid">
          {Object.entries(allCourses).map(([id, course]) => (
            <CourseView key={id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
