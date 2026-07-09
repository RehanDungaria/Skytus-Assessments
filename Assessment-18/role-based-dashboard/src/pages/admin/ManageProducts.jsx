import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const INITIAL_PRODUCTS = [
  { id: 1, name: "Quantum Headset Pro", category: "Electronics", price: 299.99, stock: 84, status: "active" },
  { id: 2, name: "EcoBrew Coffee Maker", category: "Kitchen", price: 89.99, stock: 210, status: "active" },
  { id: 3, name: "FlexFit Yoga Mat", category: "Sports", price: 49.99, stock: 56, status: "active" },
  { id: 4, name: "Nova Desk Lamp", category: "Home", price: 39.99, stock: 0, status: "inactive" },
  { id: 5, name: "SkyDrive SSD 1TB", category: "Electronics", price: 129.99, stock: 33, status: "active" },
  { id: 6, name: "AquaPure Water Bottle", category: "Sports", price: 24.99, stock: 180, status: "active" },
];

const CATEGORIES = ["All", "Electronics", "Kitchen", "Sports", "Home"];

export default function ManageProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", category: "Electronics", price: "", stock: "" });

  const filtered = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const deleteProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id));

  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((p) => p.id === id ? { ...p, status: p.status === "active" ? "inactive" : "active" } : p)
    );
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts((prev) => [
      ...prev,
      { id: Date.now(), ...newProduct, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) || 0, status: "active" },
    ]);
    setNewProduct({ name: "", category: "Electronics", price: "", stock: "" });
    setShowModal(false);
  };

  const stockColor = (stock) => {
    if (stock === 0) return "#ef4444";
    if (stock < 50) return "#f59e0b";
    return "#10b981";
  };

  return (
    <DashboardLayout>
      <div className="page-actions-bar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-tab ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          ➕ Add Product
        </button>
      </div>

      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className={`product-card ${p.status}`}>
            <div className="product-card-header">
              <span className="product-category-badge">{p.category}</span>
              <span className={`status-badge ${p.status}`}>{p.status}</span>
            </div>
            <div className="product-icon">📦</div>
            <h4 className="product-name">{p.name}</h4>
            <p className="product-price">${p.price.toFixed(2)}</p>
            <div className="product-stock">
              <span style={{ color: stockColor(p.stock) }}>
                {p.stock === 0 ? "Out of Stock" : `${p.stock} in stock`}
              </span>
              <div className="stock-bar">
                <div
                  className="stock-fill"
                  style={{
                    width: `${Math.min((p.stock / 300) * 100, 100)}%`,
                    background: stockColor(p.stock),
                  }}
                />
              </div>
            </div>
            <div className="product-actions">
              <button className="action-btn toggle" onClick={() => toggleStatus(p.id)}>
                {p.status === "active" ? "🔒" : "🔓"}
              </button>
              <button className="action-btn delete" onClick={() => deleteProduct(p.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">No products found</div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add New Product</h3>
            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}>
                {CATEGORIES.filter((c) => c !== "All").map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Price ($)</label>
              <input type="number" placeholder="0.00" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input type="number" placeholder="0" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={addProduct}>Add Product</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
