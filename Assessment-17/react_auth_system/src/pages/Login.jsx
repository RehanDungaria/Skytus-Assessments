import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const {
    login,
    isAuthenticated,
    loading
  } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent logged-in users from opening Login page
  if (!loading && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    setIsSubmitting(true);

    const result = await login(username, password);

    setIsSubmitting(false);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back 👋</h1>

        <p>Please login to continue</p>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isSubmitting}
          >
            {
              isSubmitting
              ? "Logging in..."
              : "Login"
            }
          </button>

        </form>

        <div className="demo-box">

          <h3>DummyJSON Credentials</h3>

          <p>
            Username:
            <strong> emilys</strong>
          </p>

          <p>
            Password:
            <strong> emilyspass</strong>
          </p>

        </div>

      </div>

    </div>
  );
}