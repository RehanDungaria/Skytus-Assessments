import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          SHOP<span>ZONE</span>
        </div>

        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button">Search</button>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#orders">Orders</a>
          <div className="cart-icon">🛒 Cart</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;