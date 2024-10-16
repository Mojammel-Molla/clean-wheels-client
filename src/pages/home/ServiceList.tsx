import React from 'react';

import { TService } from '../../types';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorComponent from '../../components/ui/ErrorComponent';
import { useGetAllServicesQuery } from '../../redux/api/service/serviceApi';

const ServiceList: React.FC = () => {
  const { data, error, isLoading } = useGetAllServicesQuery<any>(undefined);
  const services: TService[] = data?.data;
  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div>
        <ErrorComponent />
      </div>
    );

  return (
    <div className="md:mx-10 md:my-5">
      <h3 className="text-center mb-8 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
        All services
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {services?.slice(0, 8).map(service => (
          <div
            key={service._id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <h2 className=" text-2xl md:text-3xl font-bold ">
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

            <Link to={`/service/${service._id}`}>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/services">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceList;
