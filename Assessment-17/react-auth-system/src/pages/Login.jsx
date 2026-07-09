import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Login() {
  const { login, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const validate = () => {
    const validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setApiError("");

    if (!validate()) return;

    setLoading(true);

    const result = await login(
      formData.username,
      formData.password,
      formData.remember
    );

    setLoading(false);

    if (!result.success) {
      setApiError(result.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background"></div>

      <div className="login-card">

        <div className="login-header">
          <h1>React Auth</h1>
          <p>Welcome Back 👋</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Username</label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />

            {errors.username && (
              <small className="field-error">
                {errors.username}
              </small>
            )}

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.password && (
              <small className="field-error">
                {errors.password}
              </small>
            )}

          </div>

          <div className="remember-row">

            <label>

              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              Remember Me

            </label>

          </div>

          <ErrorMessage message={apiError} />

          <button
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <div className="demo-box">
          <h4>Demo Credentials</h4>

          <p>
            <strong>Username:</strong> emilys
          </p>

          <p>
            <strong>Password:</strong> emilyspass
          </p>

        </div>

      </div>

      {loading && <Loader text="Authenticating..." />}
    </div>
  );
}

export default Login;