import React from 'react';
import { useGetAllSlotsQuery } from '../../redux/api/slot/slotApi';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorComponent from '../../components/ui/ErrorComponent';
import { TSlot } from '../../types';

const AllSlots: React.FC = () => {
  const { data, error, isLoading } = useGetAllSlotsQuery(undefined);
  const slots: TSlot[] = data?.data;
  console.log(slots);
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
    <div className="h-[70vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {slots?.map(slot => (
          <div key={slot._id} className="bg-white shadow-md rounded-lg p-4">
            {/* Slot Service and Status */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg text-blue-600">
                Service ID: {slot.service}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-sm ${
                  slot.isBooked === 'available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {slot.isBooked}
              </span>
            </div>

            {/* Date */}
            <p className="text-gray-600 mb-2">
              <strong>Date:</strong> {new Date(slot.date).toLocaleDateString()}
            </p>

            {/* Time */}
            <p className="text-gray-600">
              <strong>Time:</strong> {slot.startTime} - {slot.endTime}
            </p>

            {/* Book Now Button */}
            {slot.isBooked === 'available' && (
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all">
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSlots;
