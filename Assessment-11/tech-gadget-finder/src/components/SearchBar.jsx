import React, { forwardRef } from "react";

const SearchBar = forwardRef(({ searchText, onSearchChange }, ref) => {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        ref={ref}
        type="text"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by product name or brand..."
        className="search-input"
      />
    </div>
  );
});

export default SearchBar;