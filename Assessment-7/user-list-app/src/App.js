import React, { useState } from 'react';
// Updated Path to match the new structure:
import UserCard from './components/UserCard'; 

const initialUsers = [
  { id: 1, name: 'Rehan Dungaria', email: 'rehan@gmail.com', isActive: true },
  { id: 2, name: 'Devansh Kalia', email: 'devansh@gmail.com', isActive: false },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', isActive: true },
];

function App() {
  const [users, setUsers] = useState(initialUsers);

  const toggleUserStatus = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isActive: !user.isActive } : user
    ));
  };

  const clearAllUsers = () => setUsers([]);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">User Management Dashboard</h2>
      
      {users.length > 0 && (
        <button className="clear-btn" onClick={clearAllUsers}>
          Clear All Users
        </button>
      )}

      {users.length === 0 ? (
        <div className="empty-state">
          <h3>No users available</h3>
          <p>All users have been cleared.</p>
        </div>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              user={user} 
              onToggleStatus={toggleUserStatus} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;