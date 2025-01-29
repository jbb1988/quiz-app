import React, { useState } from 'react';
import { courses, courseCategories } from '../../styles/theme';
import marsLogo from '../../assets/mars-logo.svg';
import CourseView from './CourseView';

const Dashboard = ({ onQuizSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const groupedCourses = Object.values(courses).reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <div className="flex items-center gap-8">
            <img src={marsLogo} alt="MARS Company" className="dashboard-logo" />
            <button 
              className="btn btn-outline flex items-center gap-2"
              onClick={handleBackToCourses}
            >
              <span>←</span>
              <span>Back to Courses</span>
            </button>
          </div>
          <button className="btn btn-primary">My Progress</button>
        </header>

        <aside className="dashboard-sidebar">
          <h2 className="text-xl font-bold mb-4">Course Modules</h2>
          <nav>
            <ul className="space-y-2">
              {selectedCourse.modules.map(module => (
                <li key={module.id}>
                  <button
                    className="w-full text-left p-3 rounded hover:bg-background"
                    style={{ color: courseCategories[selectedCourse.category].color }}
                  >
                    {module.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="dashboard-main">
          <CourseView 
            course={selectedCourse}
            onQuizSelect={onQuizSelect}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <img src={marsLogo} alt="MARS Company" className="dashboard-logo" />
        <div className="flex items-center gap-4">
          <button className="btn btn-outline">Profile</button>
          <button className="btn btn-primary">My Progress</button>
        </div>
      </header>

      <aside className="dashboard-sidebar">
        <h2 className="text-xl font-bold mb-6">Categories</h2>
        <nav>
          <ul className="space-y-3">
            {Object.values(courseCategories).map(category => (
              <li key={category.id}>
                <button
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedCategory === category.id ? 'bg-background font-medium' : ''
                  }`}
                  style={{ 
                    color: category.color,
                    background: selectedCategory === category.id 
                      ? `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)`
                      : 'transparent'
                  }}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to MARS Learning</h1>
          <p className="text-text-light">Select a course to begin your training</p>
        </div>

        {Object.entries(groupedCourses)
          .filter(([categoryId]) => !selectedCategory || categoryId === selectedCategory)
          .map(([categoryId, categoryCourses]) => (
            <section key={categoryId} className="mb-8">
              <h2 
                className="text-xl font-bold mb-4"
                style={{ color: courseCategories[categoryId].color }}
              >
                {courseCategories[categoryId].name}
              </h2>
              <div className="course-grid">
                {categoryCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="course-card"
                    onClick={() => handleCourseSelect(course)}
                  >
                    <div 
                      className="course-card-header"
                      style={{ 
                        background: `linear-gradient(135deg, ${courseCategories[course.category].color} 0%, ${courseCategories[course.category].color}dd 100%)`
                      }}
                    >
                      <div>
                        <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                        {course.subtitle && (
                          <p className="text-sm opacity-90">{course.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <div className="course-card-body">
                      <p className="text-text-light">{course.description}</p>
                      <div className="course-card-footer">
                        <span 
                          className="text-sm font-medium"
                          style={{ color: courseCategories[course.category].color }}
                        >
                          {course.modules?.length || 0} {course.modules?.length === 1 ? 'module' : 'modules'}
                        </span>
                        <button 
                          className="btn btn-primary"
                          style={{ 
                            background: `linear-gradient(135deg, ${courseCategories[course.category].color} 0%, ${courseCategories[course.category].color}dd 100%)`
                          }}
                        >
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </main>
    </div>
  );
};

export default Dashboard;
