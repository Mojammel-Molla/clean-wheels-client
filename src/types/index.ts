export type TService = {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  _id: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type TReview = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type TSlot = {
  _id: string;
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};
