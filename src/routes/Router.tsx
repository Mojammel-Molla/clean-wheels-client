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
import MyBookings from '../pages/dashboard/user/MyBookings';
import SlotManagement from '../pages/dashboard/admin/SlotManagement';
import ServiceManagement from '../pages/dashboard/admin/service-management/ServiceManagement';
import UserManagement from '../pages/dashboard/admin/user-management/UserManagement';
import BookingManagement from '../pages/dashboard/admin/booking-management/BookingManagement';

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

    children: [
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
      {
        path: 'service-management',
        element: <ServiceManagement services={[]} />,
      },
      {
        path: 'slot-management',
        element: <SlotManagement />,
      },
      {
        path: 'user-management',
        element: <UserManagement users={[]} bookings={[]} />,
      },
      {
        path: 'booking-management',
        element: <BookingManagement bookings={[]} />,
      },
    ],
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
