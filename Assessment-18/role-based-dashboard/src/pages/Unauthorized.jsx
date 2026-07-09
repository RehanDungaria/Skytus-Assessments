import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Unauthorized() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="error-page">
      <div className="error-page-content">
        <div className="error-code">403</div>
        <div className="error-emoji">🚫</div>
        <h2>Access Forbidden</h2>
        <p>
          You don't have permission to view this page.
          {user && ` Your current role is `}
          {user && <strong className={`role-text ${user.role}`}>{user.role}</strong>}
          {user && `.`}
        </p>
        <div className="error-actions">
          <button
            className="btn-primary"
            onClick={() => navigate(user?.role === "admin" ? "/admin" : "/user")}
          >
            Go to My Dashboard
          </button>
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
