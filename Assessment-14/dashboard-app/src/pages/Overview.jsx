import DashboardCard from "../components/DashboardCard";
import { useDashboard } from "../context/DashboardContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import {
  FaBoxOpen,
  FaUsers,
  FaDollarSign,
  FaStar,
} from "react-icons/fa";

function Overview() {
  const { products, users, loading, error } = useDashboard();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const totalRevenue = products.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const averageRating =
    products.length > 0
      ? (
          products.reduce(
            (sum, product) => sum + product.rating.rate,
            0
          ) / products.length
        ).toFixed(1)
      : 0;

  return (
    <div>
      <div className="welcome-banner">
        <h1>Welcome Back 👋</h1>
        <p>Here's what's happening with your dashboard today.</p>
      </div>

      <div className="cards-grid">
        <DashboardCard
          title="Products"
          value={products.length}
          icon={<FaBoxOpen />}
          color="#6366F1"
        />

        <DashboardCard
          title="Users"
          value={users.length}
          icon={<FaUsers />}
          color="#10B981"
        />

        <DashboardCard
          title="Revenue"
          value={`$${totalRevenue.toFixed(2)}`}
          icon={<FaDollarSign />}
          color="#F59E0B"
        />

        <DashboardCard
          title="Avg Rating"
          value={averageRating}
          icon={<FaStar />}
          color="#EF4444"
        />
      </div>

      <div className="chart-placeholder">
        <h2>Sales Analytics</h2>

        <div className="fake-chart">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
        </div>
      </div>

      <div className="activity-box">
        <h2>Dashboard Summary</h2>

        <ul>
          <li>📦 Total Products : {products.length}</li>
          <li>👥 Registered Users : {users.length}</li>
          <li>⭐ Average Rating : {averageRating}</li>
          <li>💰 Estimated Revenue : ${totalRevenue.toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
}

export default Overview;