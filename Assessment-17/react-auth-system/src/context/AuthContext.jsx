import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import axios from "../api/axios";

const AuthContext = createContext();

const STORAGE_TOKEN_KEY = "token";
const STORAGE_USER_KEY = "user";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Login
  // -----------------------------
  const login = async (username, password, rememberMe) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN_ENDPOINT,
        {
          username,
          password,
        }
      );

      const apiToken =
        response.data.accessToken || response.data.token;

      if (!apiToken) {
        return {
          success: false,
          message: "Token not received from server",
        };
      }

      const loggedUser = {
        id: response.data.id,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        maidenName: response.data.maidenName,
        username: response.data.username,
        email: response.data.email,
        image: response.data.image,
        gender: response.data.gender,
        role: response.data.role,
      };

      setToken(apiToken);
      setUser(loggedUser);

      if (rememberMe) {
        localStorage.setItem(STORAGE_TOKEN_KEY, apiToken);
        localStorage.setItem(
          STORAGE_USER_KEY,
          JSON.stringify(loggedUser)
        );
      } else {
        localStorage.removeItem(STORAGE_TOKEN_KEY);
        localStorage.removeItem(STORAGE_USER_KEY);
      }

      return {
        success: true,
      };
    } catch (error) {
      let message = "Login Failed";

      if (!error.response) {
        message = "Network Error";
      } else if (error.response.status === 400) {
        message = "Invalid Username or Password";
      } else if (error.response.status === 401) {
        message = "Unauthorized";
      } else if (error.response.status >= 500) {
        message = "Server Error";
      }

      return {
        success: false,
        message,
      };
    }
  };

  // -----------------------------
  // Logout
  // -----------------------------
  const logout = () => {
    localStorage.removeItem(STORAGE_TOKEN_KEY);
    localStorage.removeItem(STORAGE_USER_KEY);

    setToken(null);
    setUser(null);
  };

  // -----------------------------
  // Restore Session
  // -----------------------------
  useEffect(() => {
    const storedToken = localStorage.getItem(STORAGE_TOKEN_KEY);
    const storedUser = localStorage.getItem(STORAGE_USER_KEY);

    if (storedToken) {
      setToken(storedToken);

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Failed to parse stored user:", error);
          localStorage.removeItem(STORAGE_USER_KEY);
        }
      }
    }

    setLoading(false);
  }, []);

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      login,
      logout,
      isAuthenticated: !!token,
    }),
    [token, user, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};