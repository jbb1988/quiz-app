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
        <nav className="flex flex-col gap-2">
          <button
            className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 border border-transparent
              ${!selectedCategory ? 'bg-primary bg-opacity-10 text-primary border-primary' : 'hover:bg-gray-50'}
            `}
            onClick={() => setSelectedCategory(null)}
          >
            All Courses
          </button>
          {Object.entries(courseCategories).map(([id, category]) => (
            <button
              key={id}
              onClick={() => handleCategoryClick(id)}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200 border border-transparent
                ${selectedCategory === id 
                  ? 'bg-opacity-10 border-current' 
                  : 'hover:bg-gray-50'
                }
              `}
              style={{
                backgroundColor: selectedCategory === id ? `${category.color}20` : '',
                color: selectedCategory === id ? category.color : 'var(--color-text-primary)',
                borderColor: selectedCategory === id ? category.color : 'transparent'
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

        <div className="space-y-12">
          {Object.entries(courseCategories).map(([categoryId, category]) => {
            const coursesInCategory = categorizedCourses[categoryId] || [];

            if (!selectedCategory || selectedCategory === categoryId) {
              return coursesInCategory.length > 0 ? (
                <div key={categoryId} className="space-y-6">
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
                              Start Learning
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
