import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import { FaUserEdit, FaEnvelope, FaVenusMars, FaBriefcase, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    gender: user?.gender || '',
    role: user?.role || 'User',
    company: user?.company?.name || 'Not specified',
    address: user?.address?.address || 'Not specified',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, you'd call an API here
    alert('Profile updated successfully (UI only)');
  };

  return (
    <div className="profile-page">
      <Navbar />
      <main className="profile-content">
        <div className="profile-card glass">
          <div className="profile-header">
            <div className="avatar-wrapper">
              <img src={user?.image} alt={user?.username} className="large-avatar" />
              <button className="edit-avatar-btn"><FaUserEdit /></button>
            </div>
            <h1>{formData.firstName} {formData.lastName}</h1>
            <p className="username">@{user?.username}</p>
          </div>

          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-grid">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaUserEdit}
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaUserEdit}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaEnvelope}
              />
              <Input
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaVenusMars}
              />
              <Input
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaBriefcase}
              />
              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaBuilding}
              />
            </div>
            
            <div className="full-width-input">
              <Input
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                icon={FaMapMarkerAlt}
              />
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <>
                  <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
