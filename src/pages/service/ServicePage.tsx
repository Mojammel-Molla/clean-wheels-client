import React, { useState } from 'react';
import { TService } from '../../types';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorComponent from '../../components/ui/ErrorComponent';
import { Link } from 'react-router-dom';
import { useGetAllServicesQuery } from '../../redux/api/service/serviceApi';

const ServicePage: React.FC = () => {
  const { data, error, isLoading } = useGetAllServicesQuery<any>(undefined);
  const services: TService[] = data?.data;

  // Search and sort states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('default');

  // Filter and sort the services
  const filteredServices = services?.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedServices = [...(filteredServices || [])].sort((a, b) => {
    if (sortOption === 'priceLowToHigh') return a.price - b.price;
    if (sortOption === 'priceHighToLow') return b.price - a.price;
    if (sortOption === 'duration') return a.duration - b.duration;
    return 0; // Default sort
  });

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
        All Services
      </h3>

      {/* Search and Sort Controls */}
      <div className="mb-8 flex justify-between items-center max-w-7xl mx-auto">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border-2 border-blue-300 p-2 rounded-lg w-full md:w-1/3"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={e => setSortOption(e.target.value)}
          className="border-2 border-blue-300 p-2 rounded-lg w-full md:w-1/4 ml-4"
        >
          <option value="default">All services</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="duration">Duration</option>
        </select>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedServices?.map(service => (
          <div
            key={service._id}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold">{service.name}</h2>
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
                Book Slot
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
