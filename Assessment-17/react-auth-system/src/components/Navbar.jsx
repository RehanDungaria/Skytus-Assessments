import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout, user } = useAuth();

  const location = useLocation();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      logout();
    }
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        ReactAuth
      </div>

      <div className="navbar-links">

        <Link
          className={
            location.pathname === "/dashboard"
              ? "active"
              : ""
          }
          to="/dashboard"
        >
          Dashboard
        </Link>

        <Link
          className={
            location.pathname === "/profile"
              ? "active"
              : ""
          }
          to="/profile"
        >
          Profile
        </Link>

      </div>

      <div className="navbar-right">

        <span className="username">
          {user?.name}
        </span>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;