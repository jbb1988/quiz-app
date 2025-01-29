import React, { useState } from 'react';
import '../../styles/components/Profile.css';

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    company: user?.company || '',
    role: user?.role || ''
  });

  const stats = {
    coursesCompleted: Object.keys(user?.progress || {}).length,
    averageScore: calculateAverageScore(user?.progress || {}),
    totalQuizzes: calculateTotalQuizzes(user?.progress || {})
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile logic here
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="profile-name">{formData.name}</h2>
          <p className="profile-email">{formData.email}</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h3 className="section-title">Learning Progress</h3>
            <div className="profile-stats">
              <div className="stat-card">
                <div className="stat-value">{stats.coursesCompleted}</div>
                <div className="stat-label">Courses Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  {stats.averageScore > 0 ? `${stats.averageScore}%` : '-'}
                </div>
                <div className="stat-label">Average Score</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{stats.totalQuizzes}</div>
                <div className="stat-label">Quizzes Taken</div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Profile Information</h3>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled
                />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company"
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Enter your role"
                />
              </div>

              <div className="profile-actions">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

function calculateAverageScore(progress) {
  if (!progress || Object.keys(progress).length === 0) return 0;

  let totalScore = 0;
  let totalQuestions = 0;

  Object.values(progress).forEach(quiz => {
    totalScore += quiz.score;
    totalQuestions += quiz.totalQuestions;
  });

  return totalQuestions > 0 ? Math.round((totalScore / totalQuestions) * 100) : 0;
}

function calculateTotalQuizzes(progress) {
  return Object.keys(progress || {}).length;
}

export default Profile;
