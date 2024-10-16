import LoadingSpinner from '../../../../components/ui/LoadingSpinner';
import ErrorComponent from '../../../../components/ui/ErrorComponent';
import {
  useGetAllUsersQuery,
  useUpdateRoleMutation,
} from '../../../../redux/api/auth/authApi';
import toast, { Toaster } from 'react-hot-toast';

interface TUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  address: string;
}

const UserManagement: React.FC = () => {
  const { data, error, isLoading } = useGetAllUsersQuery<any>(undefined);
  const users: TUser[] = data?.data;

  const [updateRole] = useUpdateRoleMutation(undefined);
  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error)
    return (
      <div>
        <ErrorComponent />{' '}
      </div>
    );

  const handleSubmit = async (id: string) => {
    const res = await updateRole(id);
    if (res?.data) {
      toast.success('Admin created successfully');
    }

    console.log({ res }, id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* User List */}
      <h3 className="text-xl font-semibold mb-4">Users List</h3>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user._id}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleSubmit(user._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster />
    </div>
  );
};

export default UserManagement;
