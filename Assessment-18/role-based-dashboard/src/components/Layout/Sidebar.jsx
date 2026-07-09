import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const adminLinks = [
  { to: "/admin", icon: "⊞", label: "Dashboard", end: true },
  { to: "/admin/users", icon: "👥", label: "Manage Users" },
  { to: "/admin/products", icon: "📦", label: "Manage Products" },
];

const userLinks = [
  { to: "/user", icon: "⊞", label: "Dashboard", end: true },
  { to: "/user/profile", icon: "👤", label: "Profile" },
  { to: "/user/orders", icon: "🛍️", label: "Orders" },
];

export default function Sidebar() {
  const { user } = useAuth();

  const links = user?.role === "admin" ? adminLinks : userLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">◈</span>
        <span className="brand-name">TechFlow</span>
      </div>

      <div className="sidebar-role-badge">
        <span className={`role-pill ${user?.role}`}>
          {user?.role?.toUpperCase()}
        </span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-section-label">Navigation</p>

        {links.map(({ to, icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon">{icon}</span>
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}