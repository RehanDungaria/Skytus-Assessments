import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import ProductList from "./components/ProductList";
import productsData from "./data/products";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [stockStatus, setStockStatus] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isLoading, setIsLoading] = useState(true);

  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current?.focus();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = [...productsData];

    if (searchText.trim() !== "") {
      const query = searchText.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
      );
    }

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (priceRange !== "All") {
      result = result.filter((product) => {
        if (priceRange === "Under 20000") {
          return product.price < 20000;
        }

        if (priceRange === "20000 to 50000") {
          return product.price >= 20000 && product.price <= 50000;
        }

        if (priceRange === "Above 50000") {
          return product.price > 50000;
        }

        return true;
      });
    }

    if (stockStatus !== "All") {
      result = result.filter((product) =>
        stockStatus === "In Stock" ? product.inStock : !product.inStock
      );
    }

    setFilteredProducts(result);
  }, [searchText, category, priceRange, stockStatus]);

  const resetFilters = () => {
    setSearchText("");
    setCategory("All");
    setPriceRange("All");
    setStockStatus("All");
    searchInputRef.current?.focus();
  };

  return (
    <main className="app">
      <section className="dashboard">
        <div className="header">
          <div>
            <p className="eyebrow">Smart gadget marketplace</p>
            <h1>Tech Gadget Finder</h1>
          </div>

          <div className="result-count">
            <span>{filteredProducts.length}</span>
            products found
          </div>
        </div>

        <SearchBar
          ref={searchInputRef}
          searchText={searchText}
          onSearchChange={setSearchText}
        />

        <FilterPanel
          category={category}
          priceRange={priceRange}
          stockStatus={stockStatus}
          onCategoryChange={setCategory}
          onPriceRangeChange={setPriceRange}
          onStockStatusChange={setStockStatus}
          onResetFilters={resetFilters}
        />

        {isLoading ? (
          <div className="loader-wrap">
            <div className="loader"></div>
            <p>Loading premium gadgets...</p>
          </div>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </section>
    </main>
  );
}

export default App;