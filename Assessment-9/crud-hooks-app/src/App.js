import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      setUsers([
        { id: '1', name: 'John Doe', email: 'john@example.com' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addOrUpdateUser = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      const newUser = { ...user, id: uuidv4() };
      setUsers([...users, newUser]);
    }
    setCurrentUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    setCurrentUser(null);
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>🛠 React CRUD App (Hooks)</h1>
      <hr />
      <SearchBar onSearch={handleSearch} />
      <ItemForm addOrUpdateItem={addOrUpdateUser} currentItem={currentUser} />
      <ItemList users={filteredUsers} onDelete={deleteUser} onEdit={editUser} />
    </div>
  );
}

export default App;