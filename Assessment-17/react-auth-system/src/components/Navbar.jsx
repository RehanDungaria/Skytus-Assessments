import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaBars, FaTimes, FaSignOutAlt, FaUser, FaChartPie } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/dashboard" className="navbar-logo">
          Auth<span>System</span>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/dashboard" className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
              <FaChartPie className="nav-icon" /> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className={({ isActive }) => `nav-links ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
              <FaUser className="nav-icon" /> Profile
            </NavLink>
          </li>
          <li className="nav-item user-info-mobile">
            <div className="user-profile">
              <img src={user?.image} alt={user?.username} className="nav-avatar" />
              <span>{user?.username}</span>
            </div>
          </li>
          <li className="nav-item">
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt className="nav-icon" /> Logout
            </button>
          </li>
        </ul>

        <div className="user-info-desktop">
          <div className="user-profile">
            <img src={user?.image} alt={user?.username} className="nav-avatar" />
            <span>{user?.username}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
