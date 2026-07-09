import React, { useCallback, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const crumbs = location.pathname.split('/').filter(Boolean);
  const breadcrumbLabel = crumbs.length === 0 ? 'Dashboard' : crumbs[0].charAt(0).toUpperCase() + crumbs[0].slice(1);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:ml-64">
        <div className="p-4 lg:p-6">
          <Header title="Admin Dashboard" onToggleSidebar={toggleSidebar} onSearch={handleSearch} searchTerm={searchTerm} />
          <nav className="mt-4 flex items-center gap-2 text-sm text-slate-500">
            <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
            {crumbs.length > 0 && <span>/</span>}
            <span className="font-medium text-slate-700">{breadcrumbLabel}</span>
          </nav>
          <div className="mt-6">
            <Outlet context={{ searchTerm }} />
          </div>
          <footer className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm text-slate-500 shadow-sm">
            © 2026 Admin Dashboard. Built with React, Tailwind, and React Router.
          </footer>
        </div>
      </div>
      {sidebarOpen && <div className="fixed inset-0 z-20 bg-slate-950/40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
};

export default DashboardLayout;
