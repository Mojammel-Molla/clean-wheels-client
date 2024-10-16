import React, { useState, useEffect } from 'react';
// import {
//   setComment,
//   setName,
//   setRating,
// } from '../../redux/features/reviewSlice';
import { TReview } from '../../types';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorComponent from '../../components/ui/ErrorComponent';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
// import { RootState } from '@reduxjs/toolkit/query';
import {
  useCreateReviewMutation,
  useGetAllReviewsQuery,
} from '../../redux/api/review/reviewApi';
import toast, { Toaster } from 'react-hot-toast';

const ReviewSection: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const { data, error, isLoading } = useGetAllReviewsQuery<any>({});
  const [createReview] = useCreateReviewMutation();
  const reviews: TReview[] = data?.data;
  // const dispatch = useAppDispatch();
  // const { name, comment, rating } = useAppSelector(
  //   (state: RootState) => state.review
  // );

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
  const handleRating = (rate: number) => {
    setRating(rate);
    console.log('This is rating', rating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && comment && name) {
      const newReview = { rating, comment, name };
      createReview(newReview);
      toast.success('Review posted successfully');
      setRating(null);
      setComment('');
      setName('');
    }
  };

  // Change review on interval
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (reviews.length > 0) {
      const interval = setInterval(() => {
        setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
      }, 5000); // Change review every 5 seconds

      return () => clearInterval(interval);
    }
  }, [reviews.length]);

  // Navigate to the previous review
  const handlePrevReview = () => {
    setCurrentReviewIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next review
  const handleNextReview = () => {
    setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  return (
    <section className="border-2 p-8">
      <h2 className="text-center mb-8 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-blue-500">
        Customer Reviews
      </h2>
      <div className=" md:flex max-w-7xl md:gap-10 mx-auto">
        {/* Auto Slider Section */}

        <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg mb-6 relative content-center ">
          {/* <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Current Review
          </h3> */}
          <button
            onClick={handlePrevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-700 text-2xl "
          >
            &#10094; {/* Left Arrow */}
          </button>
          <button
            onClick={handleNextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-700 text-2xl"
          >
            &#10095; {/* Right Arrow */}
          </button>
          <div>
            <div className="flex items-center justify-center mb-8">
              {/* Display stars for the current review */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-4xl ${
                      index < reviews[currentReviewIndex].rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 italic text-center">
                "{reviews[currentReviewIndex].comment}"
              </p>
              <p className="text-gray-600 mt-2">
                - {reviews[currentReviewIndex].name}
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white md:w-1/3 p-6 rounded-lg shadow-lg mb-6"
        >
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Rate Our Service
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  className={`text-3xl ${
                    star <= (rating || 0) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold text-gray-700 mb-2">
              Your Feedback
            </label>
            <textarea
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Tell us about your experience..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default ReviewSection;
