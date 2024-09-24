import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Review {
  rating: number;
  feedback: string;
}

const ReviewSection: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    { rating: 5, feedback: 'Great service, my car looks brand new!' },
    { rating: 4, feedback: 'Quick and efficient. Will definitely come back!' },
  ]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && feedback) {
      const newReview = { rating, feedback };
      setReviews([newReview, ...reviews]);
      setRating(null);
      setFeedback('');
    }
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Leave a Review
      </h2>
      <div className="flex justify-between max-w-5xl mx-auto">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white w-1/2 p-6 rounded-lg shadow-lg mb-6"
        >
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

        {/* Post-Submission Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Customer Reviews
          </h3>

          {/* Average Rating */}
          <div className="flex items-center mb-6">
            <p className="text-4xl font-bold text-yellow-500">
              {calculateAverageRating()}
            </p>
            <p className="text-xl text-gray-600 ml-4">
              Based on {reviews.length} reviews
            </p>
          </div>

          {/* Recent Reviews */}
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <span
                    key={star}
                    className={`text-xl ${
                      star <= review.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{review.feedback}"</p>
            </div>
          ))}

          {/* See All Reviews Button */}
          <Link
            to="/reviews"
            className="block mt-6 text-blue-700 font-bold text-center hover:underline"
          >
            See All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
