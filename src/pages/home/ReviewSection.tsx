import React, { useState, useEffect } from 'react';
import { useGetAllReviewsQuery } from '../../redux/features/reviewSlice';
import { TReview } from '../../types';

interface Review {
  rating: number;
  feedback: string;
  name: string;
}

const ReviewSection: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [review, setReview] = useState<Review[]>([
    {
      rating: 5,
      feedback: 'Great service, my car looks brand new!',
      name: 'Alice',
    },
    {
      rating: 4,
      feedback: 'Quick and efficient. Will definitely come back!',
      name: 'Bob',
    },
    {
      rating: 5,
      feedback: 'Absolutely loved the interior detailing!',
      name: 'Charlie',
    },
    { rating: 4, feedback: 'The team was very professional.', name: 'Diana' },
    { rating: 3, feedback: 'Good, but I expected a bit more.', name: 'Evan' },
  ]);

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && feedback && name) {
      const newReview = { rating, feedback, name };
      setReview([newReview, ...review]);
      setRating(null);
      setFeedback('');
      setName('');
    }
  };

  // Change review on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prevIndex => (prevIndex + 1) % review.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [review.length]);

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

  const { data, error, isLoading } = useGetAllReviewsQuery({});
  const reviews: TReview[] = data?.data;
  console.log(reviews);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading services</div>;
  return (
    <section className="border-2 p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Customer Reviews
      </h2>
      <div className=" md:flex max-w-7xl md:gap-10 mx-auto">
        {/* Auto Slider Section */}

        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6 relative content-center ">
          {/* <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Current Review
          </h3> */}
          <button
            onClick={handlePrevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700"
          >
            &#10094; {/* Left Arrow */}
          </button>
          <button
            onClick={handleNextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700"
          >
            &#10095; {/* Right Arrow */}
          </button>
          <div>
            <div className="flex items-center mb-6">
              <p className="text-4xl font-bold text-yellow-500">
                {review[currentReviewIndex].rating}
              </p>
              <p className="text-xl  text-gray-600 ml-4">
                Based on {review.length} reviews
              </p>
            </div>
            <div className="mb- text-center">
              <p className="text-gray-700 italic">
                "{review[currentReviewIndex].feedback}"
              </p>
              <p className="text-gray-600 mt-2">
                - {review[currentReviewIndex].name}
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white md:w-1/2 p-6 rounded-lg shadow-lg mb-6"
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
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
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
    </section>
  );
};

export default ReviewSection;
