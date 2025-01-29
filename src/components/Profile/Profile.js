import React, { useState } from 'react';
import { approvedDesigns } from '../../styles/theme';
import '../../styles/components/Profile.css';

const Profile = ({ user }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    notifications: true,
    theme: 'light'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save changes would go here
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Settings</h1>
        <button 
          className="btn btn-primary"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? (
            <>
              <i className="fas fa-times"></i>
              <span>Cancel</span>
            </>
          ) : (
            <>
              <i className="fas fa-edit"></i>
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <div className="profile-avatar" style={approvedDesigns.sideMenu.userProfile.avatar}>
            <i className="fas fa-user-circle"></i>
          </div>
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          ) : (
            <div className="profile-info">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h3>Preferences</h3>
          <div className="preferences-list">
            <div className="preference-item">
              <span>Email Notifications</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={formData.notifications}
                  onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                  disabled={!editMode}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="preference-item">
              <span>Theme</span>
              <select
                value={formData.theme}
                onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                disabled={!editMode}
                className="form-control"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h3>Account Security</h3>
          <div className="security-options">
            <button className="btn btn-secondary" disabled={!editMode}>
              <i className="fas fa-key"></i>
              <span>Change Password</span>
            </button>
            <button className="btn btn-secondary" disabled={!editMode}>
              <i className="fas fa-shield-alt"></i>
              <span>Two-Factor Authentication</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
