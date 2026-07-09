import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { FiBox, FiGrid, FiSettings, FiUsers } from 'react-icons/fi';

const links = [
  { to: '/', label: 'Dashboard', icon: FiGrid },
  { to: '/users', label: 'Users', icon: FiUsers },
  { to: '/products', label: 'Products', icon: FiBox },
  { to: '/settings', label: 'Settings', icon: FiSettings },
];

const Sidebar = React.memo(({ open, onClose }) => {
  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 1024) {
      onClose();
    }
  }, [onClose]);

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-64 transform border-r border-slate-200 bg-slate-950 text-slate-100 transition duration-300 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col px-4 py-6">
        <div className="mb-8 px-2">
          <h1 className="text-xl font-semibold">Nexus Admin</h1>
          <p className="text-sm text-slate-400">Control Hub</p>
        </div>
        <nav className="space-y-2">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleLinkClick}
              className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
});

export default Sidebar;
