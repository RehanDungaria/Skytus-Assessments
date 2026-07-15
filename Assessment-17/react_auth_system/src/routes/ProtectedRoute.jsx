import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Wait until authentication state is restored
  if (loading) {
    return <Loader />;
  }

  // If not logged in, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated
  return children;
}