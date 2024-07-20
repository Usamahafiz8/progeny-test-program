// pages/admin/user-list.js
import DashboardLayout from '@/components/header/DashboardLayout';
import { useState, useEffect } from 'react';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from an API or local storage
    const fetchUsers = async () => {
      // Example fetch: const response = await fetch('/api/users');
      // const data = await response.json();
      const data = JSON.parse(localStorage.getItem('users')) || []; // Simulated fetch
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <DashboardLayout role="admin">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default UserListPage;
