import React, { useCallback } from 'react';
import { FiBell, FiLogOut, FiMenu, FiSearch } from 'react-icons/fi';

const Header = React.memo(({ title, onToggleSidebar, onSearch, searchTerm }) => {
  const handleSearch = useCallback((event) => {
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onToggleSidebar} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
          <FiMenu className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm text-slate-500">Overview</p>
          <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-3">
        <label className="flex hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 sm:flex md:min-w-[240px]">
          <FiSearch className="text-slate-400" />
          <input
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent text-sm outline-none"
            placeholder="Search"
          />
        </label>
        <button className="rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-100">
          <FiBell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">AD</div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Admin</p>
            <p className="text-xs text-slate-500">Super User</p>
          </div>
        </div>
        <button className="rounded-full border border-rose-200 bg-rose-50 p-2 text-rose-600 hover:bg-rose-100">
          <FiLogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
});

export default Header;
