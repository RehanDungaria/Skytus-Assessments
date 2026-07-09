import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

const userStats = [
  { label: "Orders Placed", value: "24", icon: "🛍️", color: "#06b6d4" },
  { label: "Wishlist Items", value: "8", icon: "❤️", color: "#ec4899" },
  { label: "Points Earned", value: "1,240", icon: "⭐", color: "#f59e0b" },
  { label: "Active Subscriptions", value: "2", icon: "📋", color: "#10b981" },
];

const recentOrders = [
  { id: "#4821", product: "Quantum Headset Pro", date: "Jun 28, 2024", status: "delivered", amount: "$299.99" },
  { id: "#4756", product: "FlexFit Yoga Mat", date: "Jun 15, 2024", status: "delivered", amount: "$49.99" },
  { id: "#4812", product: "SkyDrive SSD 1TB", date: "Jul 1, 2024", status: "shipped", amount: "$129.99" },
];

const statusColors = { delivered: "#10b981", shipped: "#06b6d4", pending: "#f59e0b", cancelled: "#ef4444" };

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="dashboard-welcome">
        <h2>Welcome back, <span className="highlight">{user?.name}</span> 👋</h2>
        <p>Here's a summary of your activity and recent orders.</p>
      </div>

      <div className="stats-grid">
        {userStats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon" style={{ background: `${s.color}22`, color: s.color }}>
              {s.icon}
            </div>
            <div className="stat-info">
              <p className="stat-label">{s.label}</p>
              <p className="stat-value">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-two">
        <div className="card">
          <h3 className="card-title">Recent Orders</h3>
          <div className="order-list">
            {recentOrders.map((o) => (
              <div key={o.id} className="order-item">
                <div className="order-icon">🛍️</div>
                <div className="order-details">
                  <p className="order-product">{o.product}</p>
                  <p className="order-meta">{o.id} · {o.date}</p>
                </div>
                <div className="order-right">
                  <p className="order-amount">{o.amount}</p>
                  <span className="status-badge" style={{ background: `${statusColors[o.status]}22`, color: statusColors[o.status] }}>
                    {o.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Account Summary</h3>
          <div className="account-summary">
            <div className="summary-avatar">{user?.avatar}</div>
            <p className="summary-name">{user?.name}</p>
            <p className="summary-email">{user?.email}</p>
            <div className="summary-stats">
              <div className="summary-stat">
                <span className="summary-stat-val">24</span>
                <span className="summary-stat-label">Orders</span>
              </div>
              <div className="summary-stat">
                <span className="summary-stat-val">8</span>
                <span className="summary-stat-label">Wishlist</span>
              </div>
              <div className="summary-stat">
                <span className="summary-stat-val">4</span>
                <span className="summary-stat-label">Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
