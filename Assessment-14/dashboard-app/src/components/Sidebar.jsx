import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <FaChartLine />
        <span>AdminPanel</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaHome />
          <span>Overview</span>
        </NavLink>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <FaUsers />
          <span>Users</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;