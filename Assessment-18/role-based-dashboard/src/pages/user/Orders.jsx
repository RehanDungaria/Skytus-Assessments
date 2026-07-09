import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const ORDERS = [
  { id: "#4821", product: "Quantum Headset Pro", category: "Electronics", date: "Jun 28, 2024", status: "delivered", amount: "$299.99", qty: 1 },
  { id: "#4812", product: "SkyDrive SSD 1TB", category: "Electronics", date: "Jul 1, 2024", status: "shipped", amount: "$129.99", qty: 2 },
  { id: "#4756", product: "FlexFit Yoga Mat", category: "Sports", date: "Jun 15, 2024", status: "delivered", amount: "$49.99", qty: 1 },
  { id: "#4698", product: "EcoBrew Coffee Maker", category: "Kitchen", date: "May 30, 2024", status: "delivered", amount: "$89.99", qty: 1 },
  { id: "#4832", product: "AquaPure Water Bottle", category: "Sports", date: "Jul 2, 2024", status: "pending", amount: "$24.99", qty: 3 },
  { id: "#4641", product: "Nova Desk Lamp", category: "Home", date: "May 10, 2024", status: "cancelled", amount: "$39.99", qty: 1 },
];

const STATUS_CONFIG = {
  delivered: { color: "#10b981", icon: "✅" },
  shipped: { color: "#06b6d4", icon: "🚚" },
  pending: { color: "#f59e0b", icon: "⏳" },
  cancelled: { color: "#ef4444", icon: "❌" },
};

export default function Orders() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = ORDERS.filter((o) => {
    const matchStatus = filter === "all" || o.status === filter;
    const matchSearch =
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.product.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const totalSpent = ORDERS.filter(o => o.status !== "cancelled")
    .reduce((sum, o) => sum + parseFloat(o.amount.replace("$", "")) * o.qty, 0);

  return (
    <DashboardLayout>
      <div className="orders-summary">
        <div className="order-stat-card">
          <span>🛍️</span>
          <div>
            <p className="order-stat-val">{ORDERS.length}</p>
            <p className="order-stat-label">Total Orders</p>
          </div>
        </div>
        <div className="order-stat-card">
          <span>✅</span>
          <div>
            <p className="order-stat-val">{ORDERS.filter(o => o.status === "delivered").length}</p>
            <p className="order-stat-label">Delivered</p>
          </div>
        </div>
        <div className="order-stat-card">
          <span>🚚</span>
          <div>
            <p className="order-stat-val">{ORDERS.filter(o => o.status === "shipped").length}</p>
            <p className="order-stat-label">In Transit</p>
          </div>
        </div>
        <div className="order-stat-card">
          <span>💰</span>
          <div>
            <p className="order-stat-val">${totalSpent.toFixed(2)}</p>
            <p className="order-stat-label">Total Spent</p>
          </div>
        </div>
      </div>

      <div className="page-actions-bar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by order ID or product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          {["all", "pending", "shipped", "delivered", "cancelled"].map((s) => (
            <button
              key={s}
              className={`filter-tab ${filter === s ? "active" : ""}`}
              onClick={() => setFilter(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Order History <span className="count-badge">{filtered.length}</span></h3>
        <div className="orders-list">
          {filtered.map((o) => {
            const sc = STATUS_CONFIG[o.status];
            return (
              <div key={o.id} className="order-row">
                <div className="order-row-icon" style={{ background: `${sc.color}22`, color: sc.color }}>
                  {sc.icon}
                </div>
                <div className="order-row-main">
                  <p className="order-row-product">{o.product}</p>
                  <p className="order-row-meta">
                    {o.id} · {o.category} · Qty: {o.qty}
                  </p>
                </div>
                <div className="order-row-date">{o.date}</div>
                <div className="order-row-amount">{o.amount}</div>
                <span
                  className="status-badge"
                  style={{ background: `${sc.color}22`, color: sc.color }}
                >
                  {o.status}
                </span>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="empty-state">No orders found</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
