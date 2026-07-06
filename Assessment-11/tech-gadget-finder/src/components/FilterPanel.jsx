import React from "react";

function FilterPanel({
  category,
  priceRange,
  stockStatus,
  onCategoryChange,
  onPriceRangeChange,
  onStockStatusChange,
  onResetFilters,
}) {
  return (
    <section className="filter-panel">
      <div className="filter-group">
        <label>Category</label>
        <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Audio">Audio</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Price</label>
        <select value={priceRange} onChange={(event) => onPriceRangeChange(event.target.value)}>
          <option value="All">All</option>
          <option value="Under 20000">Under ₹20,000</option>
          <option value="20000 to 50000">₹20,000 - ₹50,000</option>
          <option value="Above 50000">Above ₹50,000</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Stock</label>
        <select value={stockStatus} onChange={(event) => onStockStatusChange(event.target.value)}>
          <option value="All">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      <button className="reset-button" onClick={onResetFilters}>
        Reset Filters
      </button>
    </section>
  );
}

export default FilterPanel;