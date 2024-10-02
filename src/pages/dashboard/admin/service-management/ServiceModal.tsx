import React from 'react';

interface ModalProps {
  setShowModal: (show: boolean) => void;
}

const ServiceModal: React.FC<ModalProps> = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Add New Service</h3>

        {/* Service Name Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Service Name</span>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        {/* Description Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Description</span>
          <textarea className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
        </label>

        {/* Price Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Price</span>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        {/* Duration Input */}
        <label className="block mb-4">
          <span className="text-gray-700">Duration (in minutes)</span>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            // value={newService.duration}
            // onChange={e =>
            //   setNewService({ ...newService, duration: e.target.value })
            // }
          />
        </label>

        {/* Modal Buttons */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
