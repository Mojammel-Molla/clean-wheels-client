import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ServicePage from '../pages/service/ServicePage';
import BookingPage from '../pages/booking/BookingPage';
import ContactPage from '../pages/contact/ContactPage';
import ErrorPage from '../pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
