import { useState } from "react";
import DashboardLayout from "../../components/Layout/DashboardLayout";

const INITIAL_USERS = [
  { id: 1, name: "Jordan Lee", email: "jordan.lee@techflow.io", role: "user", status: "active", joined: "Jan 12, 2024" },
  { id: 2, name: "Emma Roberts", email: "emma.r@techflow.io", role: "user", status: "active", joined: "Feb 3, 2024" },
  { id: 3, name: "Mike Torres", email: "mike.t@techflow.io", role: "admin", status: "active", joined: "Mar 17, 2024" },
  { id: 4, name: "Lily Park", email: "lily.p@techflow.io", role: "user", status: "inactive", joined: "Apr 5, 2024" },
  { id: 5, name: "Chris Wang", email: "chris.w@techflow.io", role: "user", status: "active", joined: "May 20, 2024" },
  { id: 6, name: "Sara Khan", email: "sara.k@techflow.io", role: "user", status: "active", joined: "Jun 1, 2024" },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "user" });

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || u.role === filter || u.status === filter;
    return matchSearch && matchFilter;
  });

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "active" ? "inactive" : "active" } : u
      )
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;
    setUsers((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...newUser,
        status: "active",
        joined: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      },
    ]);
    setNewUser({ name: "", email: "", role: "user" });
    setShowModal(false);
  };

  return (
    <DashboardLayout>
      <div className="page-actions-bar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-tabs">
          {["all", "admin", "user", "active", "inactive"].map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          ➕ Add User
        </button>
      </div>

      <div className="card">
        <div className="table-header">
          <h3>All Users <span className="count-badge">{filtered.length}</span></h3>
        </div>
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="table-user">
                      <div className="table-avatar">{u.name.charAt(0)}</div>
                      <div>
                        <p className="table-name">{u.name}</p>
                        <p className="table-email">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`role-badge ${u.role}`}>{u.role}</span>
                  </td>
                  <td>
                    <span className={`status-badge ${u.status}`}>{u.status}</span>
                  </td>
                  <td className="table-date">{u.joined}</td>
                  <td>
                    <div className="table-actions">
                      <button
                        className="action-btn toggle"
                        onClick={() => toggleStatus(u.id)}
                        title={u.status === "active" ? "Deactivate" : "Activate"}
                      >
                        {u.status === "active" ? "🔒" : "🔓"}
                      </button>
                      <button
                        className="action-btn delete"
                        onClick={() => deleteUser(u.id)}
                        title="Delete User"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="empty-row">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Add New User</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Full name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email address"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={addUser}>Add User</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
