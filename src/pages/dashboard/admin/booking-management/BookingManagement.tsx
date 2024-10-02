import React, { useState } from 'react';

interface Booking {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface BookingManagementProps {
  bookings: Booking[];
}

const BookingManagement: React.FC<BookingManagementProps> = ({ bookings }) => {
  const [editedRole, setEditedRole] = useState<string>('');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // Handle save changes to role
  const handleSaveRole = () => {
    // Assuming a function to update user roles exists
    // updateUserRole(selectedUserId, editedRole);

    setShowEditModal(false);
  };

  return (
    <div className="p-4">
      {/* Booking List */}
      <h3 className="text-xl font-semibold mt-8 mb-4">User Bookings</h3>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Service</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Start Time</th>
            <th className="px-4 py-2 border">End Time</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map(booking => (
            <tr key={booking._id}>
              <td className="px-4 py-2 border">{booking.service}</td>
              <td className="px-4 py-2 border">
                {new Date(booking.date).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border">{booking.startTime}</td>
              <td className="px-4 py-2 border">{booking.endTime}</td>
              <td className="px-4 py-2 border">{booking.status}</td>
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
              value={editedRole}
              onChange={e => setEditedRole(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSaveRole}
                className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
              >
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

export default BookingManagement;
