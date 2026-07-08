import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();

  return (
    <nav className="navbar">
      <h2>🛡 AuthShield</h2>

      {isAuthenticated && (
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>

          <button onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;