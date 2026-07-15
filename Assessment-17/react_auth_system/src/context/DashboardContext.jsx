import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/axios";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export function DashboardProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    try {
      setLoading(true);

      const [productsRes, usersRes] = await Promise.all([
        api.get("/products"),
        api.get("/users"),
      ]);

      setProducts(productsRes.data.products);
      setUsers(usersRes.data.users);

      setError("");
    } catch (err) {
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        products,
        users,
        loading,
        error,
        refresh: fetchDashboardData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}