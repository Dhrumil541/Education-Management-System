import React from 'react';
import DashboardCard from '../../components/DashboardCard';

const StudentDashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Enrolled Courses" count={3} color="bg-blue-500" />
        <DashboardCard title="Total Assignments" count={5} color="bg-green-500" />
        <DashboardCard title="Overall Grades" count="A" color="bg-yellow-500" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">View Assignments</h3>
        <p>Check your upcoming assignments and submission deadlines.</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">View Grades</h3>
        <p>Track your grades for each course and assignment.</p>
      </div>
    </div>
  );
};

export default StudentDashboard;
