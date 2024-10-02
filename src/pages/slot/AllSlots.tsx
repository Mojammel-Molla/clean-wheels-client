import React from 'react';
import { useGetAllSlotsQuery } from '../../redux/api/slot/slotApi';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorComponent from '../../components/ui/ErrorComponent';
import { TService, TSlot } from '../../types';
import { useGetServiceByIdQuery } from '../../redux/api/service/serviceApi';
import { useParams } from 'react-router-dom';

const AllSlots: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetAllSlotsQuery(undefined);
  const { data: serviceById } = useGetServiceByIdQuery(id!);

  const slots: TSlot[] = data?.data;
  const service: TService = serviceById?.data;
  console.log(slots, service);
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
          <div key={slot._id} className="bg-white shadow-lg rounded-lg p-4">
            {/* Slot Service and Status */}
            <div className="flex items-center justify-between mb-2">
              <div className="bg-white  border-gray-200  rounded-lg p-6 transition-transform transform hover:scale-105">
                <div className="flex justify-between items-center">
                  <h2 className=" text-2xl md:text-3xl font-bold ">
                    {service.name}
                  </h2>
                </div>

                <p className="text-gray-600 mt-3">{service.description}</p>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold text-green-500">
                      ${service.price}
                    </p>
                    <span
                      className={`px-3 py-2 rounded-full text-sm ${
                        slot.isBooked === 'available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {slot.isBooked}
                    </span>
                  </div>
                </div>
              </div>
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
                Book Slot
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSlots;
