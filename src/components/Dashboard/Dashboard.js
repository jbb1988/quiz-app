import React from 'react';
import { useNavigate } from 'react-router-dom';
import { courseCategories } from '../../styles/theme';

const Dashboard = ({ courses }) => {
  const navigate = useNavigate();
  
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

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

        {Object.entries(courseCategories).map(([categoryId, category]) => {
          const categoryCourses = Object.entries(courses).filter(([_, course]) => course.category === categoryId);
          
          return categoryCourses.length > 0 ? (
            <div key={categoryId} className="mb-12">
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
        })}
      </main>
    </div>
  );
};

export default Dashboard;
