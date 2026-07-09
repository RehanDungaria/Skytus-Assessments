import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <h2>Dashboard</h2>

      <div className="header-right">
        <FaBell className="icon" />

        <div className="profile">
          <FaUserCircle size={32} />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;