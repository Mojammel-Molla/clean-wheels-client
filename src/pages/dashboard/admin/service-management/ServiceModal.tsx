import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import {
  setDescription,
  setDuration,
  setName,
  setPrice,
} from '../../../../redux/features/serviceSlice';
import { useCreateServicesMutation } from '../../../../redux/api/service/serviceApi';
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
  setShowModal: (show: boolean) => void;
}

const ServiceModal: React.FC<ModalProps> = ({ setShowModal }) => {
  const dispatch = useAppDispatch();
  const { name, description, price, duration } = useAppSelector(
    (state: RootState) => state.service
  );
  const [createService] = useCreateServicesMutation();

  const handleSubmit = async () => {
    const NewService = {
      name: name,
      description: description,
      price: price,
      duration: duration,
      isDeleted: false,
    };

    const result = await createService(NewService);
    if (result?.data) {
      toast.success('Service created successfully');
    }
    setShowModal(false);
    console.log({ serviceInfo: { NewService } }, 'out put', { result });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Add New Service</h3>

        {/* Service Name Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Service Name</span>
          <input
            type="text"
            value={name}
            onChange={e => dispatch(setName(e.target.value))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        {/* Description Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Description</span>
          <textarea
            value={description}
            onChange={e => dispatch(setDescription(e.target.value))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        {/* Price Input */}
        <label className="block mb-2">
          <span className="text-gray-700">Price</span>
          <input
            type="number"
            onChange={e => dispatch(setPrice(Number(e.target.value)))}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </label>

        {/* Duration Input */}
        <label className="block mb-4">
          <span className="text-gray-700">Duration (in minutes)</span>
          <input
            type="number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            onChange={e => dispatch(setDuration(Number(e.target.value)))}
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
            onClick={() => handleSubmit()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Service
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ServiceModal;
