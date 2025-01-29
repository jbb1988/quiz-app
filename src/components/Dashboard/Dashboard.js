import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';

const Dashboard = ({ courses, userProgress }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

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
      <aside className="dashboard-sidebar">
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="categories-list">
            <li>
              <button
                className={`category-button ${!selectedCategory ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                All Courses
              </button>
            </li>
            {Object.entries(courseCategories).map(([id, category]) => (
              <li key={id}>
                <button
                  onClick={() => handleCategoryClick(id)}
                  className={`category-button ${selectedCategory === id ? 'active' : ''}`}
                  style={{
                    backgroundColor: selectedCategory === id ? category.color : '',
                    color: selectedCategory === id ? 'white' : 'var(--color-text-primary)'
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Select a course to begin your training</h1>
        </div>

        <div className="space-y-8">
          {Object.entries(courseCategories).map(([categoryId, category]) => {
            const coursesInCategory = categorizedCourses[categoryId] || [];

            if (!selectedCategory || selectedCategory === categoryId) {
              return coursesInCategory.length > 0 ? (
                <div key={categoryId} className="space-y-4">
                  <h2 className="text-xl font-bold">{category.name}</h2>
                  <div className="course-grid">
                    {coursesInCategory.map(course => (
                      <div
                        key={course.id}
                        className="course-card"
                        onClick={() => handleCourseClick(course.id)}
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
                              Start
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null;
            }
            return null;
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
