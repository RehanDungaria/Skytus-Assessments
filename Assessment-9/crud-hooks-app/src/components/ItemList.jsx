import React from 'react';
import Button from './Button';

const ItemList = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      <h3>📋 User List</h3>
      {users.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '20px', color: '#999' }}>No users found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button onClick={() => onEdit(user)} label="✏️" />
                  <Button onClick={() => onDelete(user.id)} label="🗑" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ItemList;