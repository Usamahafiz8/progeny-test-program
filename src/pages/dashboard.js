// pages/dashboard/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/header/DashboardLayout';

const DashboardPage = () => {
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    
    if (!storedRole) {
      router.push('/');
      return;
    }

    setRole(storedRole);
    setLoading(false);
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <DashboardLayout role={role}>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Dashboard</h1>
        {role === 'admin' && <p className="text-center mb-4">Welcome, Admin!</p>}
        {role === 'user' && <p className="text-center mb-4">Welcome, User!</p>}
        <button
          onClick={() => {
            localStorage.removeItem('role');
            router.push('/');
          }}
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
