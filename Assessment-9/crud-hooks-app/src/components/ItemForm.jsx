import React, { useState, useRef, useEffect } from 'react';
import Input from './Input';
import Button from './Button';

const ItemForm = ({ addOrUpdateItem, currentItem }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
      setEmail(currentItem.email);
      nameInputRef.current?.focus();
    } else {
      setName('');
      setEmail('');
      nameInputRef.current?.focus();
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateItem({ id: currentItem?.id || null, name, email });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>{currentItem ? '✏️ Edit User' : '➕ Add New User'}</h3>
      <div className="form-row">
        <Input 
            label="Name:" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            inputRef={nameInputRef} 
            placeholder="Enter your name..." />
        <Input label="Email:" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@domain.com" />
      </div>
      <Button type="submit" label="Save" />
    </form>
  );
};

export default ItemForm;