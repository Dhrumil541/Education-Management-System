import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleLogin = () => {
    if (role) {
      login(role);
      navigate(`/${role}/dashboard`); // Navigate to the respective dashboard
    } else {
      alert('Please select a role to login.'); // Alert for role selection
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>
      <select onChange={(e) => setRole(e.target.value)} className="border p-2 mb-4 w-64 rounded">
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded w-64">
        Login
      </button>
    </div>
  );
};

export default Login;
