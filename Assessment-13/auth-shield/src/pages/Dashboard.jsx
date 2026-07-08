import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="logo">
            <h2>🛡 AuthShield</h2>
          </div>

          <nav className="sidebar-nav">
            <Link to="/dashboard">
              📊 Dashboard
            </Link>

            <Link to="/profile">
              👤 Profile
            </Link>

            <Link to="/profile">
              ⚙️ Settings
            </Link>
          </nav>
        </div>

        <div className="logout-area">
          <p>Logged in as:</p>
          <small>{user?.email}</small>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* Header */}
        <div className="top-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back 👋</p>
          </div>

          <div className="profile-badge">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* Hero Banner */}
        <div className="hero-card">
          <div>
            <h2>
              Welcome Back,
              <br />
              {user?.email}
            </h2>

            <p>
              You are successfully authenticated.
            </p>

            <p>
              Here's what's happening with your account.
            </p>
          </div>

          <div className="rocket">
            🚀
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <span>👥</span>
            <h3>Users</h3>
            <h2>1,250</h2>
            <p>+12.5% from last month</p>
          </div>

          <div className="stat-card">
            <span>🛒</span>
            <h3>Orders</h3>
            <h2>340</h2>
            <p>+8.4% from last month</p>
          </div>

          <div className="stat-card">
            <span>💰</span>
            <h3>Revenue</h3>
            <h2>$12,500</h2>
            <p>+15.3% from last month</p>
          </div>
        </div>

        {/* Information Cards */}
        <div className="info-grid">
          <div className="info-card">
            <h3>Account Information</h3>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Status:</strong> Active
            </p>

            <p>
              <strong>Authentication:</strong> Verified
            </p>

            <p>
              <strong>Token:</strong>
            </p>

            <small>{user?.token}</small>
          </div>

          <div className="info-card">
            <h3>Security Tips</h3>

            <ul>
              <li>Use strong passwords</li>
              <li>Enable 2FA when available</li>
              <li>Do not share your credentials</li>
              <li>Logout from public devices</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;