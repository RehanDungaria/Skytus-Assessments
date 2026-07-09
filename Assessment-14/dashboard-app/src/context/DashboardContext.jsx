import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../services/axios";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export function DashboardProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      // Men's Clothing Products (Fake Store API)
      const productRequest = axios.get(
        "https://fakestoreapi.com/products/category/men's clothing"
      );

      // Users (DummyJSON)
      const userRequest = api.get("/users");

      const [productRes, userRes] = await Promise.all([
        productRequest,
        userRequest,
      ]);

      // Fake Store API returns an array
      setProducts(productRes.data);

      // DummyJSON returns { users: [...] }
      setUsers(userRes.data.users);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        products,
        users,
        loading,
        error,
        fetchDashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}