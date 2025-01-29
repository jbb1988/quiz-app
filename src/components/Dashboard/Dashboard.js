import React, { useState } from 'react';
import { courses, courseCategories } from '../../styles/theme';
import { m3SoftwareCourse } from '../../data/courses/m3-software';
import marsLogo from '../../assets/mars-logo.svg';
import CourseView from './CourseView';

// Add the M3 Software course to our courses
courses.m3_software = m3SoftwareCourse;

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

  // If a course is selected, show the CourseView
  if (selectedCourse) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <img src={marsLogo} alt="MARS Company" className="dashboard-logo" />
          <div className="flex items-center gap-4">
            <button 
              className="btn btn-outline"
              onClick={handleBackToCourses}
            >
              ← Back to Courses
            </button>
            <button className="btn btn-primary">My Progress</button>
          </div>
        </header>

        <aside className="dashboard-sidebar">
          <h2 className="text-xl font-bold mb-4">Course Modules</h2>
          <nav>
            <ul className="space-y-2">
              {selectedCourse.modules.map(module => (
                <li key={module.id}>
                  <button
                    className="w-full text-left p-2 rounded hover:bg-background"
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

  // Otherwise show the course listing
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
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <nav>
          <ul className="space-y-2">
            {Object.values(courseCategories).map(category => (
              <li key={category.id}>
                <button
                  className={`w-full text-left p-2 rounded hover:bg-background ${
                    selectedCategory === category.id ? 'bg-background' : ''
                  }`}
                  style={{ color: category.color }}
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
              <h2 className="text-xl font-bold mb-4" style={{ color: courseCategories[categoryId].color }}>
                {courseCategories[categoryId].name}
              </h2>
              <div className="course-grid">
                {categoryCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="course-card cursor-pointer"
                    onClick={() => handleCourseSelect(course)}
                  >
                    <div 
                      className="course-card-header"
                      style={{ backgroundColor: courseCategories[course.category].color }}
                    >
                      <h3 className="font-bold">{course.title}</h3>
                    </div>
                    <div className="course-card-body">
                      <p className="text-text-light mb-4">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-text-light">
                          {course.modules?.length || 0} modules
                        </span>
                        <button className="btn btn-primary">Start Learning</button>
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
