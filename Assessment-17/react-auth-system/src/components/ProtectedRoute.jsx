import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

const ProtectedRoute = () => {
  const { isAuthenticated, loading, checkExpiry } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkExpiry();
  }, [location, checkExpiry]);

  if (loading) {
    return <Loader fullPage />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
