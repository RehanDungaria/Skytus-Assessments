import DashboardLayout from "../../components/Layout/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

const stats = [
  { label: "Total Users", value: "1,284", change: "+12%", icon: "👥", color: "#8b5cf6" },
  { label: "Active Products", value: "342", change: "+5%", icon: "📦", color: "#06b6d4" },
  { label: "Revenue", value: "$48,200", change: "+23%", icon: "💰", color: "#10b981" },
  { label: "System Health", value: "99.8%", change: "↑ Stable", icon: "🟢", color: "#f59e0b" },
];

const recentActivity = [
  { user: "Sarah K.", action: "Added new product", time: "2 min ago", type: "product" },
  { user: "Mike T.", action: "Updated user profile", time: "15 min ago", type: "user" },
  { user: "Emma R.", action: "Placed order #4821", time: "1 hr ago", type: "order" },
  { user: "John D.", action: "Registered as new user", time: "3 hr ago", type: "user" },
  { user: "Lily P.", action: "Uploaded product image", time: "5 hr ago", type: "product" },
];

const typeColors = { product: "#06b6d4", user: "#8b5cf6", order: "#10b981" };

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="dashboard-welcome">
        <h2>Welcome back, <span className="highlight">{user?.name}</span> 👋</h2>
        <p>Here's what's happening with your platform today.</p>
      </div>

      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon" style={{ background: `${s.color}22`, color: s.color }}>
              {s.icon}
            </div>
            <div className="stat-info">
              <p className="stat-label">{s.label}</p>
              <p className="stat-value">{s.value}</p>
              <p className="stat-change positive">{s.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid-two">
        <div className="card">
          <h3 className="card-title">Recent Activity</h3>
          <div className="activity-list">
            {recentActivity.map((a, i) => (
              <div key={i} className="activity-item">
                <div
                  className="activity-dot"
                  style={{ background: typeColors[a.type] }}
                />
                <div className="activity-content">
                  <p>
                    <strong>{a.user}</strong> {a.action}
                  </p>
                  <span className="activity-time">{a.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Quick Actions</h3>
          <div className="quick-actions">
            {[
              { label: "Add New User", icon: "➕", color: "#8b5cf6" },
              { label: "Create Product", icon: "📦", color: "#06b6d4" },
              { label: "Export Reports", icon: "📊", color: "#10b981" },
              { label: "System Settings", icon: "⚙️", color: "#f59e0b" },
            ].map((qa) => (
              <button key={qa.label} className="quick-action-btn" style={{ "--qa-color": qa.color }}>
                <span className="qa-icon">{qa.icon}</span>
                <span>{qa.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
