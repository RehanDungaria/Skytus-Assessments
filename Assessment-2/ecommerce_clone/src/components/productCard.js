import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="card-content">
        <span className="category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        
        <div className="rating">
          <span className="star">★</span>
          <span className="rating-number">{product.rating}</span>
        </div>

        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          <button type="button" className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;