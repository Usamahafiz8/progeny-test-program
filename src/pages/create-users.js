// pages/admin/create-users.js
import DashboardLayout from '@/components/header/DashboardLayout';
import { useState } from 'react';

const CreateUsersPage = () => {
  const [users, setUsers] = useState([{ name: '', email: '', password: '', role: 'user' }]);
  const [error, setError] = useState('');

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newUsers = [...users];
    newUsers[index][name] = value;
    setUsers(newUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, { name: '', email: '', password: '', role: 'user' }]);
  };

  const handleRemoveUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the users data to an API endpoint or handle it according to your backend setup
      // Example: await fetch('/api/create-users', { method: 'POST', body: JSON.stringify(users) });
      console.log('Users created:', users);
      alert('Users created successfully!');
    } catch (err) {
      setError('An error occurred while creating users.');
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Users</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="border p-4 rounded-md mb-4">
              <h2 className="text-lg font-semibold mb-2">User {index + 1}</h2>
              <div>
                <label htmlFor={`name-${index}`} className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id={`name-${index}`}
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`email-${index}`} className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id={`email-${index}`}
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`password-${index}`} className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id={`password-${index}`}
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(index, e)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`role-${index}`} className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  id={`role-${index}`}
                  name="role"
                  value={user.role}
                  onChange={(e) => handleChange(index, e)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveUser(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove User
              </button>
              <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Users
          </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddUser}
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Another User
          </button>
        
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateUsersPage;
