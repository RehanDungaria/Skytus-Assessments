import React, { useRef } from 'react';
import Button from './Button';

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSearch = () => {
    const term = inputRef.current.value;
    onSearch(term);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        ref={inputRef}
        className="search-input"
        placeholder="Search by name or email..."
      />
      <Button onClick={handleSearch} label="🔍Search" />
    </div>
  );
};

export default SearchBar;