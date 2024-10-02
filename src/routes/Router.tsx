import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ServicePage from '../pages/service/ServicePage';
import BookingPage from '../pages/booking/BookingPage';
import ContactPage from '../pages/contact/ContactPage';
import ErrorPage from '../pages/error/ErrorPage';
import MainLayout from '../components/layouts/MainLayout';
import DashboardLayout from '../components/layouts/DashboardLayout';
import AllSlots from '../pages/slot/AllSlots';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'services',
        element: <ServicePage />,
      },
      {
        path: 'service/:id',
        element: <AllSlots />,
      },
      {
        path: 'bookings',
        element: <BookingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,

    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
