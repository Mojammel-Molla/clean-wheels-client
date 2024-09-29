// src/components/ServiceList.tsx
import React from 'react';
import { useGetAllServicesQuery } from '../../redux/features/serviceSlice';

const ServiceList: React.FC = () => {
  const { data: services, error, isLoading } = useGetAllServicesQuery({});
  console.log(services);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;

  return (
    <div className="md:mx-10 md:my-5">
      <h3 className="text-3xl text-blue-700 font-bold my-3 text-center">
        All services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {services?.data?.map(service => (
          <div
            key={service._id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-blue-600">
                {service.name}
              </h2>
            </div>

            <p className="text-gray-600 mt-3">{service.description}</p>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-700">
                  <strong>Duration:</strong> {service.duration} mins
                </p>
                <p className="text-xl font-semibold text-green-500">
                  ${service.price}
                </p>
              </div>
            </div>

            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
