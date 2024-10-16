import React, { useState } from 'react';
import { TService } from '../../../../types';
import {
  useDeleteServicesMutation,
  useGetAllServicesQuery,
} from '../../../../redux/api/service/serviceApi';
import LoadingSpinner from '../../../../components/ui/LoadingSpinner';
import ErrorComponent from '../../../../components/ui/ErrorComponent';
import ServiceModal from './ServiceModal';
import toast, { Toaster } from 'react-hot-toast';

const ServiceManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, error, isLoading } = useGetAllServicesQuery<any>(undefined);
  const [deleteService] = useDeleteServicesMutation(undefined);

  const services: TService[] = data?.data;
  console.log(services);
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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleDeleteService = async (id: string) => {
    const res = await deleteService(id);
    if (res.data) {
      toast.success('Service deleted successfully');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Add Service Button */}
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Service List</h2>
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Service
        </button>
      </div>

      {/* Service Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left">Service Name</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Duration</th>
            <th className="py-2 px-4 text-left">Deleted</th>
          </tr>
        </thead>
        <tbody>
          {services?.map(service => (
            <tr key={service._id} className="border-b">
              <td className="py-2 px-4">{service.name}</td>
              <td className="py-2 px-4">{service.description}</td>
              <td className="py-2 px-4">${service.price}</td>
              <td className="py-2 px-4">{service.duration} mins</td>
              <td className="py-2 px-4">
                <button></button>
                {service.isDeleted ? (
                  <span className="text-red-500">Deleted</span>
                ) : (
                  <button
                    onClick={() => handleDeleteService(service._id)}
                    className="text-green-500"
                  >
                    Active
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Service Modal */}
      {showModal && <ServiceModal setShowModal={setShowModal} />}

      <Toaster />
    </div>
  );
};

export default ServiceManagement;
