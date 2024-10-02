import React, { useState } from 'react';
import LoadingSpinner from '../../../../components/ui/LoadingSpinner';
import ErrorComponent from '../../../../components/ui/ErrorComponent';
import { useGetAllUsersQuery } from '../../../../redux/api/auth/authApi';

interface TUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  address: string;
}

const UserManagement: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // Handle edit role
  const handleEditRole = () => {
    setShowEditModal(true);
  };

  const { data, error, isLoading } = useGetAllUsersQuery(undefined);
  const users: TUser[] = data?.data;
  console.log(users, data);
  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div>
        <ErrorComponent />{' '}
      </div>
    );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* User List */}
      <h3 className="text-xl font-semibold mb-4">Users List</h3>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user._id}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleEditRole()}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Edit Role
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit Role Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Role</h3>
            <label className="block mb-2">Role:</label>
            <input
              type="text"
              className="w-full border px-4 py-2 rounded-lg mb-4"
            />
            <div className="flex justify-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600">
                Save
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
