import React from 'react';

function UserCard({ user, onToggleStatus }) {
  return (
    <div className={`user-card ${user.isActive ? 'active-card' : 'inactive-card'}`}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>
        Status: <span className="status-badge">{user.isActive ? '🟢 Active' : '🔴 Inactive'}</span>
      </p>
      <button 
        className="toggle-btn"
        onClick={() => onToggleStatus(user.id)}
      >
        Mark as {user.isActive ? 'Inactive' : 'Active'}
      </button>
    </div>
  );
}

export default UserCard;