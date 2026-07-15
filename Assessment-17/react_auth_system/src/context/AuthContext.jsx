import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { jwtDecode } from "jwt-decode";
import api from "../services/axios";
import { LOGIN_ENDPOINT } from "../utils/constants";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loading, setLoading] = useState(true);

  // Restore session on page refresh
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      try {
        const decoded = jwtDecode(storedToken);

        // Check if token is expired
        if (decoded.exp * 1000 < Date.now()) {
          logout();
        } else {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        logout();
      }
    }

    setLoading(false);
  }, []);

  // Login Function
  const login = async (username, password) => {
    try {
      const response = await api.post(LOGIN_ENDPOINT, {
        username,
        password,
      });

      const data = response.data;

      // DummyJSON returns accessToken (or token depending on version)
      const accessToken = data.accessToken || data.token;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", JSON.stringify(data));

      setToken(accessToken);
      setUser(data);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Invalid username or password",
      };
    }
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken("");
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}