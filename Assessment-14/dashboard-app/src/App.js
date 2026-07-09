import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Users from "./pages/Users";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="overview" replace />} />

        <Route path="overview" element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
      </Route>

      <Route path="*" element={<h2>404 Page Not Found</h2>} />
    </Routes>
  );
}

export default App;