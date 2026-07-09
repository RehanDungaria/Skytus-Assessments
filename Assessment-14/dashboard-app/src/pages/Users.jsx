import { useMemo, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useDashboard } from "../context/DashboardContext";

function Users() {
  const { users = [], loading, error } = useDashboard();

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullName =
        `${user.firstName} ${user.lastName}`.toLowerCase();

      return (
        fullName.includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [users, search]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Users</h1>
          <p className="page-subtitle">
            Total Users : {users.length}
          </p>
        </div>

        <input
          className="user-search"
          placeholder="🔍 Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>
                    {user.firstName} {user.lastName}
                  </td>

                  <td>
                    <FaEnvelope /> {user.email}
                  </td>

                  <td>
                    <FaPhoneAlt /> {user.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="no-users">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;