import { useMemo, useState } from "react";

import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Dashboard() {
  const { token, user, logout, loading } = useAuth();
  const [apiError, setApiError] = useState("");

  const quickStats = useMemo(() => {
    return [
      { label: "Active Session", value: "Healthy" },
      { label: "Role", value: user?.role || "—" },
      { label: "Account", value: user?.email ? user.email.split("@")[0] : "—" },
    ];
  }, [user]);

  const recentActivity = useMemo(() => {
    return [
      { title: "Token validated", meta: "JWT exp checked" },
      { title: "Protected route accessed", meta: "/dashboard" },
      { title: "Axios interceptor ready", meta: "Attaches Authorization header" },
    ];
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Do you really want to logout?"
    );
    if (confirmLogout) {
      try {
        logout();
      } catch (e) {
        setApiError("Logout failed. Please try again.");
      }
    }
  };

  if (loading) return <Loader text="Loading dashboard..." />;

  return (
    <div className="app-shell">
      <Navbar />
      <Sidebar />

      <main className="dashboard-main">
        <div className="page-hero">
          <div>
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">
              Welcome{user?.name ? `, ${user.name}` : ""} 👋
            </p>
          </div>

          <div className="hero-actions">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="grid-3">
          {quickStats.map((s) => (
            <section className="glass-card" key={s.label}>
              <div className="card-label">{s.label}</div>
              <div className="card-vaalue">{s.value}</div>
              <div className="card-glow" />
            </section>
          ))}
        </div>

        <div className="grid-2">
          <section className="glass-card wide">
            <div className="card-header">
              <h2>Recent Activity</h2>
              <span className="pill">Live</span>
            </div>

            <div className="activity-list">
              {recentActivity.map((a) => (
                <div className="activity-row" key={a.title}>
                  <div className="activity-icon">✅</div>
                  <div className="activity-text">
                    <div className="activity-title">{a.title}</div>
                    <div className="activity-meta">{a.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card">
            <div className="card-header">
              <h2>Token</h2>
              <span className="pill pill-blue">JWT</span>
            </div>

            <div className="token-box" title={token || "No token"}>
              <code className="token-text">{token ? token : "—"}</code>
            </div>

            <div className="token-hint">Stored in localStorage and attached via Axios interceptor.</div>
          </section>
        </div>

        <ErrorMessage message={apiError} />
      </main>
    </div>
  );
}

export default Dashboard;

