import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="container py-8 max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Profile</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-outline"
          >
            Back to Dashboard
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <label className="text-sm text-text-light">Name</label>
            <div className="font-medium text-lg">{user.name}</div>
          </div>
          <div>
            <label className="text-sm text-text-light">Email</label>
            <div className="font-medium text-lg">{user.email}</div>
          </div>
          <div>
            <label className="text-sm text-text-light">Account ID</label>
            <div className="font-medium text-lg">{user.id}</div>
          </div>
          <div>
            <label className="text-sm text-text-light">Courses Enrolled</label>
            <div className="font-medium text-lg">
              {Object.keys(user.progress || {}).length} courses
            </div>
          </div>
          <div>
            <label className="text-sm text-text-light">Account Status</label>
            <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-success bg-opacity-10 text-success">
              Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
