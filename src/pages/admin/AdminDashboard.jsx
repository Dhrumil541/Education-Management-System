import React from 'react';
import DashboardCard from '../../components/DashboardCard';
import CourseManagement from './CourseManagement'; // Import the CourseManagement component

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Total Courses" count={10} color="bg-blue-500" />
        <DashboardCard title="Total Students" count={200} color="bg-green-500" />
        <DashboardCard title="Total Teachers" count={15} color="bg-yellow-500" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Manage Users</h3>
        <p>View and manage all students and teachers.</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Manage Courses</h3>
        <p>View and manage all courses offered in the system.</p>
      </div>
      <CourseManagement /> {/* Add Course Management Component here */}
    </div>
  );
};

export default AdminDashboard;
