import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuthData, setAuthData, clearAuthData, isTokenExpired } from '../utils/auth';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuth = () => {
      const { token, user } = getAuthData();
      
      if (token && user && !isTokenExpired()) {
        setToken(token);
        setUser(user);
        setIsAuthenticated(true);
      } else {
        clearAuthData();
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await api.post(process.env.REACT_APP_LOGIN_ENDPOINT, {
        username,
        password,
      });

      const { accessToken, ...userData } = response.data;
      setAuthData(accessToken, userData);
      
      setToken(accessToken);
      setUser(userData);
      setIsAuthenticated(true);
      
      return { success: true };
    } catch (error) {
      let message = 'An error occurred';
      if (error.response) {
        message = error.response.data.message || 'Invalid username/password';
      } else if (error.request) {
        message = 'Network Error';
      }
      return { success: false, message };
    }
  };

  const logout = () => {
    clearAuthData();
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const checkExpiry = () => {
    if (isAuthenticated && isTokenExpired()) {
      logout();
      window.location.href = '/login';
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, isAuthenticated, login, logout, checkExpiry }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
