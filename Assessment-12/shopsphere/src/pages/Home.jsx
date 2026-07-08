import { useEffect, useMemo, useState } from "react";
import api from "../services/api";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Home() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response =
        await api.get("/products");

      setProducts(response.data);

      setError("");
    } catch (err) {
      setError(
        "Unable to load products."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = [
    "all",
    ...new Set(
      products.map(
        (item) => item.category
      )
    ),
  ];

  const filteredProducts =
    useMemo(() => {
      let result = [...products];

      // Search

      result = result.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

      // Category

      if (category !== "all") {
        result = result.filter(
          (item) =>
            item.category === category
        );
      }

      // Sorting

      if (sortBy === "low") {
        result.sort(
          (a, b) =>
            a.price - b.price
        );
      }

      if (sortBy === "high") {
        result.sort(
          (a, b) =>
            b.price - a.price
        );
      }

      if (sortBy === "az") {
        result.sort((a, b) =>
          a.title.localeCompare(
            b.title
          )
        );
      }

      return result;
    }, [
      products,
      search,
      category,
      sortBy,
    ]);

  if (loading) return <Loader />;

  if (error)
    return (
      <ErrorMessage
        message={error}
        onRetry={fetchProducts}
      />
    );

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="page-title">
          Discover Products
        </h1>

        <div className="controls">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            className="filter-select"
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value
              )
            }
          >
            <option value="">
              Sort
            </option>

            <option value="low">
              Price Low →
              High
            </option>

            <option value="high">
              Price High →
              Low
            </option>

            <option value="az">
              Name A-Z
            </option>
          </select>
        </div>
      </div>

      {filteredProducts.length ===
      0 ? (
        <div className="empty-cart">
          <h2>
            No Products Found
          </h2>
          <p>
            Try another search.
          </p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;