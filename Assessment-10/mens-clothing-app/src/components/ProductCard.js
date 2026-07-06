function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="card-content">
        <span className="category">
          {product.category}
        </span>

        <h2>{product.title}</h2>

        <p className="brand">
          Brand: {product.brand}
        </p>

        <p className="price">
          ${product.price}
        </p>

        <p className="rating">
          ⭐ {product.rating}
        </p>

        <p className="description">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;