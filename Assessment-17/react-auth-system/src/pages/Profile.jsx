import { useMemo } from "react";

import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Profile() {
  const { user, logout, loading } = useAuth();

  const fullName = useMemo(() => {
    const name = user?.name || "User";
    return name;
  }, [user]);

  const handleLogout = () => {
    const ok = window.confirm("Logout and end your session?");
    if (ok) logout();
  };

  if (loading) return <Loader text="Loading profile..." />;

  return (
    <div className="app-shell">
      <Navbar />
      <Sidebar />

      <main className="dashboard-main">
        <div className="page-hero">
          <div>
            <h1 className="page-title">Profile</h1>
            <p className="page-subtitle">Account details at a glance ✨</p>
          </div>

          <div className="hero-actions">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <section className="profile-card">
          <div className="profile-header">
            <div className="avatar" aria-hidden>
              <span>{fullName?.slice(0, 1)?.toUpperCase()}</span>
            </div>

            <div className="profile-titles">
              <h2>{fullName}</h2>
              <p className="muted">{user?.email || "—"}</p>
            </div>

            <div className="role-badge">{user?.role || "User"}</div>
          </div>

          <div className="profile-grid">
            <div className="kv">
              <div className="kv-label">Email</div>
              <div className="kv-value">{user?.email || "—"}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Role</div>
              <div className="kv-value">{user?.role || "User"}</div>
            </div>
            <div className="kv">
              <div className="kv-label">Status</div>
              <div className="kv-value">
                <span className="status-dot" /> Active
              </div>
            </div>
            <div className="kv">
              <div className="kv-label">Security</div>
              <div className="kv-value">JWT exp checked</div>
            </div>
          </div>

          <div className="profile-footer">
            <div className="tip">
              Your session is stored in localStorage (Remember Me). It will
              auto-logout when the JWT <code>exp</code> is reached.
            </div>
          </div>
        </section>

        <ErrorMessage message="" />
      </main>
    </div>
  );
}

export default Profile;

