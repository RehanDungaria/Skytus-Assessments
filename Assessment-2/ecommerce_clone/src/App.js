import React, { useState } from 'react';
import Header from './components/header.js';
import Banner from './components/banner.js';
import ProductCard from './components/productCard.js';
import Footer from './components/footer.js';
import { mockProducts } from './data/products.js';
import './App.css'; // Importing custom styling file

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Banner />

        <main>
          <h2 className="section-title">
            {searchQuery ? `Search results for "${searchQuery}"` : "Trending Products"}
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No products found matching your search.</p>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;