import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';

const Dashboard = ({ courses }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const filteredCourses = Object.entries(courses).filter(([_, course]) => 
    !selectedCategory || course.category === selectedCategory
  );

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="flex items-center gap-4">
          <div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
          >
            MARS Learning
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="btn btn-outline"
            onClick={() => navigate('/profile')}
          >
            Profile
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/progress')}
          >
            My Progress
          </button>
        </div>
      </header>

      <aside className="dashboard-sidebar">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <nav className="space-y-2">
          <button
            className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200
              ${!selectedCategory ? 'bg-primary bg-opacity-10 text-primary' : 'hover:bg-gray-50'}
            `}
            onClick={() => setSelectedCategory(null)}
          >
            All Courses
          </button>
          {Object.entries(courseCategories).map(([id, category]) => (
            <button
              key={id}
              onClick={() => handleCategoryClick(id)}
              className={`w-full text-left px-4 py-3 rounded-md transition-all duration-200
                ${selectedCategory === id 
                  ? `bg-opacity-10 text-${category.color}`
                  : 'hover:bg-gray-50'
                }
              `}
              style={{
                backgroundColor: selectedCategory === id ? `${category.color}20` : '',
                color: selectedCategory === id ? category.color : ''
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
            const categoryCourses = filteredCourses.filter(([_, course]) => 
              course.category === categoryId
            );

            if (!selectedCategory || selectedCategory === categoryId) {
              return categoryCourses.length > 0 ? (
                <div key={categoryId}>
                  <h2 className="text-xl font-bold mb-6">{category.name}</h2>
                  <div className="course-grid">
                    {categoryCourses.map(([id, course]) => (
                      <div
                        key={id}
                        className="course-card"
                        onClick={() => handleCourseClick(id)}
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
