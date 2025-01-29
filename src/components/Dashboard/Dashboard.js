import React from 'react';
import { courseCategories } from '../../styles/theme';

const Dashboard = ({ courses, onCourseSelect }) => {
  const categorizedCourses = Object.entries(courses).reduce((acc, [id, course]) => {
    const category = course.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ id, ...course });
    return acc;
  }, {});

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-primary">
            MARS Learning
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-outline">Profile</button>
          <button className="btn btn-primary">My Progress</button>
        </div>
      </header>

      <aside className="dashboard-sidebar">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <nav>
          {Object.entries(courseCategories).map(([id, category]) => (
            <button
              key={id}
              className="mb-2 w-full text-left px-4 py-3 rounded-md hover:bg-gray-50"
              style={{
                color: category.color,
                background: `linear-gradient(to right, ${category.color}10, transparent)`
              }}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to MARS Learning</h1>
          <p className="text-text-light">Select a course to begin your training</p>
        </div>

        {Object.entries(categorizedCourses).map(([category, courses]) => (
          <div key={category} className="mb-12">
            <h2 className="text-xl font-bold mb-6">{courseCategories[category].name}</h2>
            <div className="course-grid">
              {courses.map(course => (
                <div
                  key={course.id}
                  className="course-card"
                  onClick={() => onCourseSelect(course.id)}
                >
                  <div 
                    className="course-card-header"
                    style={{
                      background: courseCategories[course.category].gradient
                    }}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-white opacity-90">{course.subtitle}</p>
                  </div>
                  <div className="course-card-body">
                    <p className="text-text-light mb-4">{course.description}</p>
                    <div className="course-card-footer">
                      <div className="text-sm text-text-light">
                        {course.modules?.length || 0} modules
                      </div>
                      <button 
                        className="btn btn-primary"
                        style={{
                          background: courseCategories[course.category].gradient
                        }}
                      >
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Dashboard;
