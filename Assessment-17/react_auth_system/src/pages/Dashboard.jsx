import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoadingProducts(true);

      const response = await axios.get(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );

      setProducts(response.data);
      setError("");
    } catch (err) {
      setError("Unable to load products.");
    } finally {
      setLoadingProducts(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="dashboard-page">
        {/* Welcome Banner */}
        <div className="welcome-banner">
          <div>
            <h1>Hello, {user?.firstName} 👋</h1>
            <p>Welcome back! Here's a quick overview of your account.</p>
          </div>

          <div className="status-badge">
            ● Online
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h4>Username</h4>
            <h2>{user?.username}</h2>
          </div>

          <div className="dashboard-card">
            <h4>Email</h4>
            <h2>{user?.email}</h2>
          </div>

          <div className="dashboard-card">
            <h4>Authentication</h4>
            <h2>Active ✅</h2>
          </div>

          <div className="dashboard-card">
            <h4>Products</h4>
            <h2>{products.length}</h2>
          </div>

        </div>

        {/* Featured Products */}

        <div className="products-section">

          <div className="section-title">
            <h2>🔥 Featured Men's Collection</h2>
            <span>{products.length} Products</span>
          </div>

          {loadingProducts ? (

            <h3>Loading Products...</h3>

          ) : error ? (

            <h3>{error}</h3>

          ) : (

            <div className="product-grid">

              {products.map((product) => (

                <div className="product-card" key={product.id}>

                  <img
                    src={product.image}
                    alt={product.title}
                  />

                  <div className="product-details">

                    <span className="category">
                      {product.category}
                    </span>

                    <h3>{product.title}</h3>

                    <div className="rating">
                      ⭐ {product.rating.rate}
                    </div>

                    <div className="price-row">

                      <span className="price">
                        ${product.price}
                      </span>

                      <button className="view-btn">
                        View
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </DashboardLayout>
  );
}