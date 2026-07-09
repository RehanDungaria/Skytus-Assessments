import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const pageTitles = {
  "/admin": "Dashboard Overview",
  "/admin/users": "Manage Users",
  "/admin/products": "Manage Products",
  "/user": "Dashboard Overview",
  "/user/profile": "My Profile",
  "/user/orders": "My Orders",
};

export default function Header() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const title = pageTitles[location.pathname] || "Dashboard";
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const dateStr = now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfile = () => {
    setDropdownOpen(false);
    navigate(user?.role === "admin" ? "/user/profile" : "/user/profile");
  };

  const handleLogout = () => {
    setDropdownOpen(false);
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{dateStr} · {timeStr}</p>
      </div>
      <div className="header-right">
        <div className="header-notifications">
          <button className="icon-btn" title="Notifications">
            <span className="notif-dot" />
            🔔
          </button>
        </div>

        {/* Clickable user dropdown */}
        <div className="header-user-wrapper" ref={dropdownRef}>
          <button
            className={`header-user-btn ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen((o) => !o)}
            aria-label="User menu"
            aria-expanded={dropdownOpen}
          >
            <div className={`header-avatar ${user?.role}`}>{user?.avatar}</div>
            <div className="header-user-info">
              <span className="header-name">{user?.name}</span>
              <span className={`header-role ${user?.role}`}>{user?.role}</span>
            </div>
            <span className={`chevron ${dropdownOpen ? "up" : ""}`}>▾</span>
          </button>

          {dropdownOpen && (
            <div className="user-dropdown">
              {/* Profile header inside dropdown */}
              <div className="dropdown-profile-header">
                <div className={`dropdown-avatar ${user?.role}`}>{user?.avatar}</div>
                <div>
                  <p className="dropdown-name">{user?.name}</p>
                  <p className="dropdown-email">{user?.email}</p>
                  <span className={`role-pill ${user?.role}`}>{user?.role?.toUpperCase()}</span>
                </div>
              </div>

              <div className="dropdown-divider" />

              <button className="dropdown-item" onClick={handleProfile}>
                <span className="dropdown-item-icon">👤</span>
                View Profile
              </button>

              <button className="dropdown-item" onClick={() => { setDropdownOpen(false); navigate(user?.role === "admin" ? "/admin" : "/user"); }}>
                <span className="dropdown-item-icon">⊞</span>
                Dashboard
              </button>

              <div className="dropdown-divider" />

              <button className="dropdown-item danger" onClick={handleLogout}>
                <span className="dropdown-item-icon">⏻</span>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
