import { useMemo, useState } from "react";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useDashboard } from "../context/DashboardContext";

function Products() {
  const { products = [], loading, error } = useDashboard();

  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1 className="page-title">Men's Clothing</h1>

      <input
        type="text"
        className="product-search"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h3>{product.title}</h3>

              <p>{product.category}</p>

              <h2>${product.price}</h2>

              <p>⭐ {product.rating.rate}</p>
            </div>
          ))
        ) : (
          <div className="no-data">
            <h2>No products found.</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;