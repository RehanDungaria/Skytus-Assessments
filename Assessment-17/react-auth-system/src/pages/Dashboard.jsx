import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Navbar from '../components/Navbar';
// import Loader from '../components/Loader';
import { FaUsers, FaBox, FaShoppingCart, FaDollarSign, FaStar } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products?limit=8');
        setProducts(response.data.products);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const stats = [
    { title: 'Total Users', value: '1,284', icon: FaUsers, color: '#4facfe' },
    { title: 'Total Products', value: '432', icon: FaBox, color: '#00f2fe' },
    { title: 'Orders', value: '856', icon: FaShoppingCart, color: '#764ba2' },
    { title: 'Revenue', value: '$12,840', icon: FaDollarSign, color: '#667eea' },
  ];

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome to your administration panel</p>
        </header>

        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass">
              <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                <stat.icon />
              </div>
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <p>{stat.value}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="products-section">
          <div className="section-header">
            <h2>Recent Products</h2>
            <button className="view-all">View All</button>
          </div>

          {loading ? (
            <div className="skeleton-grid">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton-card glass"></div>
              ))}
            </div>
          ) : error ? (
            <div className="error-msg">{error}</div>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card glass">
                  <div className="product-image">
                    <img src={product.thumbnail} alt={product.title} />
                    <span className="category-tag">{product.category}</span>
                  </div>
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <div className="product-meta">
                      <span className="price">${product.price}</span>
                      <span className="rating">
                        <FaStar className="star-icon" /> {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
