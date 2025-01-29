import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    employeeId: user.employeeId,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords if changing
    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) {
        setError('New passwords do not match');
        return;
      }
      if (formData.currentPassword !== user.password) {
        setError('Current password is incorrect');
        return;
      }
    }

    // Get all users
    const users = JSON.parse(localStorage.getItem('marsUsers') || '{}');
    
    // If email is changed, check if new email already exists
    if (formData.email !== user.email && users[formData.email]) {
      setError('Email already in use');
      return;
    }

    // Create updated user object
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      employeeId: formData.employeeId,
      password: formData.newPassword || user.password
    };

    // If email changed, remove old email entry and add new one
    if (formData.email !== user.email) {
      delete users[user.email];
    }
    users[updatedUser.email] = updatedUser;

    // Update localStorage
    localStorage.setItem('marsUsers', JSON.stringify(users));
    localStorage.setItem('marsCurrentUser', JSON.stringify(updatedUser));

    setSuccess('Profile updated successfully');
    setIsEditing(false);
    
    // Reset password fields
    setFormData(prev => ({
      ...prev,
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }));

    // Reload page after 1 second to reflect changes
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="container py-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Profile</h1>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-outline"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Employee ID
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-bold mb-4">Change Password</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-light mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    minLength={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    minLength={6}
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="text-error text-sm text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="text-success text-sm text-center">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Name
              </label>
              <div className="font-medium text-lg">{user.name}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Email
              </label>
              <div className="font-medium text-lg">{user.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Employee ID
              </label>
              <div className="font-medium text-lg">{user.employeeId}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Account Status
              </label>
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-success bg-opacity-10 text-success">
                Active
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Courses Enrolled
              </label>
              <div className="font-medium text-lg">
                {Object.keys(user.progress || {}).length} courses
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
