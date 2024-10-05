import React, { useEffect, useState } from 'react';

// Demo booking data
const bookings = [
  {
    _id: '66e66c6ffc007caf1af8da28',
    service: 'Interior Detailing',
    date: '2024-10-05',
    startTime: '09:00',
    endTime: '10:00',
    isBooked: 'available',
  },
  {
    _id: '66e66c6ffc007caf1af8da29',
    service: 'Exterior Detailing',
    date: '2024-10-05',
    startTime: '11:00',
    endTime: '12:00',
    isBooked: 'available',
  },
  {
    _id: '66e66c6ffc007caf1af8da30',
    service: 'Engine Detailing',
    date: '2024-10-06',
    startTime: '14:00',
    endTime: '15:00',
    isBooked: 'available',
  },
  {
    _id: '66e66c6ffc007caf1af8da31',
    service: 'Full Wash',
    date: '2024-10-07',
    startTime: '08:00',
    endTime: '09:00',
    isBooked: 'available',
  },
  {
    _id: '66e66c6ffc007caf1af8da32',
    service: 'Complete Interior and Exterior Detailing',
    date: '2024-10-08',
    startTime: '13:00',
    endTime: '15:00',
    isBooked: 'available',
  },
];

const SlotManagement: React.FC = () => {
  const [nextSlotCountdown, setNextSlotCountdown] = useState<string | null>(
    null
  );
  const [timers, setTimers] = useState<{ [key: string]: string }>({});

  const calculateTimeRemaining = (slotDateTime: string) => {
    const now = new Date().getTime();
    const slotTime = new Date(slotDateTime).getTime();
    const timeLeft = slotTime - now;

    if (timeLeft <= 0) {
      return '00:00:00';
    }

    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const updateTimers = () => {
      const updatedTimers: { [key: string]: string } = {};
      bookings.forEach(booking => {
        updatedTimers[booking._id] = calculateTimeRemaining(
          `${booking.date} ${booking.startTime}`
        );
      });
      setTimers(updatedTimers);
    };

    const interval = setInterval(updateTimers, 1000);

    // Calculate countdown for the next slot in the navbar
    if (bookings?.length > 0) {
      const nextSlot = bookings.reduce((earliestSlot, currentSlot) => {
        const currentTime = new Date(
          `${currentSlot.date} ${currentSlot.startTime}`
        ).getTime();
        const earliestTime = new Date(
          `${earliestSlot.date} ${earliestSlot.startTime}`
        ).getTime();
        return currentTime < earliestTime ? currentSlot : earliestSlot;
      });
      setNextSlotCountdown(
        calculateTimeRemaining(`${nextSlot.date} ${nextSlot.startTime}`)
      );
    }

    return () => clearInterval(interval);
  }, [bookings]);

  return (
    <div>
      {/* Navbar Countdown */}
      <div className="navbar">
        {nextSlotCountdown && (
          <div className="text-white bg-blue-600 px-4 py-2 rounded">
            Next Slot in: {nextSlotCountdown}
          </div>
        )}
      </div>

      {/* Upcoming Bookings Countdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {bookings?.map(booking => (
          <div
            key={booking._id}
            className="p-4 border shadow-md rounded-md bg-white text-center"
          >
            <h3 className="text-xl font-bold">{booking.service}</h3>
            <p className="text-gray-600">
              {new Date(booking.date).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              {booking.startTime} - {booking.endTime}
            </p>
            <div className="mt-4 text-lg font-semibold text-blue-500">
              Countdown: {timers[booking._id] || '00:00:00'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotManagement;
