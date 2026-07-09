import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DEMO_ACCOUNTS = [
  { name: "Alex Rivera", role: "admin", email: "alex.rivera@techflow.io", color: "#8b5cf6" },
  { name: "Jordan Lee", role: "user", email: "jordan.lee@techflow.io", color: "#06b6d4" },
];

export default function Login() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    login(role, name.trim());
    navigate(role === "admin" ? "/admin" : "/user");
  };

  const handleQuickLogin = (account) => {
    setLoading(true);
    setTimeout(() => {
      login(account.role, account.name);
      navigate(account.role === "admin" ? "/admin" : "/user");
    }, 600);
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">◈</div>
            <h1 className="login-title">TechFlow Dashboard</h1>
            <p className="login-subtitle">Role-based access control system</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(""); }}
                className={error ? "input-error" : ""}
                autoFocus
              />
              {error && <span className="field-error">{error}</span>}
            </div>

            <div className="form-group">
              <label>Select Role</label>
              <div className="role-selector">
                {["admin", "user"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`role-btn ${role === r ? "selected" : ""} ${r}`}
                    onClick={() => setRole(r)}
                  >
                    <span className="role-btn-icon">{r === "admin" ? "🛡️" : "👤"}</span>
                    <span>{r === "admin" ? "Admin" : "User"}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className={`btn-login ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? <span className="btn-spinner" /> : "Sign In"}
            </button>
          </form>

          <div className="divider"><span>or try a demo account</span></div>

          <div className="demo-accounts">
            {DEMO_ACCOUNTS.map((acc) => (
              <button
                key={acc.email}
                className="demo-account-btn"
                onClick={() => handleQuickLogin(acc)}
                disabled={loading}
              >
                <div className="demo-avatar" style={{ background: `${acc.color}33`, color: acc.color }}>
                  {acc.name.charAt(0)}
                </div>
                <div className="demo-info">
                  <span className="demo-name">{acc.name}</span>
                  <span className="demo-role" style={{ color: acc.color }}>{acc.role}</span>
                </div>
                <span className="demo-arrow">→</span>
              </button>
            ))}
          </div>
        </div>

        <p className="login-footer">
          Skytus Assessment · Role-Based Dashboard · ReactJS
        </p>
      </div>
    </div>
  );
}
