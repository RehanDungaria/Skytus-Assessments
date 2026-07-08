import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid Credentials");
    }
  };

  return (
    <div className="login-page">
      <div className="login-right">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Sign in to your AuthShield account</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-wrapper">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="demo-box">
            <h4>Demo Credentials</h4>
            <p>
              <strong>Email:</strong> eve.holt@reqres.in
            </p>
            <p>
              <strong>Password:</strong> cityslicka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
