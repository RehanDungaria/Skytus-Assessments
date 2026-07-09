import React, { useCallback, useMemo, useState } from "react";
import { FiUsers, FiPlus, FiX } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";
import DataTable from "../components/DataTable";
import UserForm from "../components/UserForm";
import { users } from "../utils/sampleData";

const Users = () => {
  const [data, setData] = useState(users);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { searchTerm = "" } = useOutletContext() || {};

  const deleteUser = useCallback((id) => {
    if (window.confirm("Delete this user?")) {
      setData((prev) => prev.filter((user) => user.id !== id));
      setMessage("User deleted successfully.");
    }
  }, []);

  const editUser = useCallback((user) => {
    setMessage(`Editing ${user.name}`);
    setShowModal(true);
  }, []);

  const activeCount = useMemo(
    () => data.filter((user) => user.status === "Active").length,
    [data]
  );

  const filteredUsers = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    if (!query) return data;

    return data.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query)
    );
  }, [data, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 p-3 rounded-xl text-white">
            <FiUsers size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">User Management</h2>
            <p className="text-gray-500">
              Manage all registered users
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
            {activeCount} Active
          </span>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            <FiPlus />
            Create User
          </button>
        </div>
      </div>

      {message && (
        <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg">
          {message}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        {filteredUsers.length > 0 ? (
          <DataTable
            data={filteredUsers}
            onEdit={editUser}
            onDelete={deleteUser}
          />
        ) : (
          <div className="text-center py-10 text-gray-500">
            No users found.
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4">

            <div className="flex justify-between items-center border-b p-5">
              <h3 className="text-xl font-bold">
                Create New User
              </h3>

              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="p-6">
              <UserForm
                onSubmitSuccess={() => {
                  setMessage("User created successfully.");
                  setShowModal(false);
                }}
              />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Users;