import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (

    <header className="header">

      <div>

        <h2>Dashboard</h2>

      </div>

      <div className="header-right">

        <span>

          Welcome,

          <strong>

            {" "}
            {user?.firstName || "User"}

          </strong>

        </span>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </header>

  );
}