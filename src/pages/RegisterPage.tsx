import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhoneNumber,
} from '../redux/features/registerSlice';
import { useRegisterMutation } from '../redux/api/auth/authApi';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, phone, address } = useAppSelector(
    (state: RootState) => state.register
  );
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle form submission
    const user = await register({
      name,
      email,
      password,
      phone,
      address,
    });
    if (user?.data) {
      toast.success('User created successfully');
      navigate('/login');
    }
    console.log(
      { userInfo: name, email, password, phone, address },
      'out put',
      user.data
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => dispatch(setName(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => dispatch(setEmail(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => dispatch(setPassword(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={e => dispatch(setPhoneNumber(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={e => dispatch(setAddress(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to={'/login'} className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
