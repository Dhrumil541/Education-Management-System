import React from 'react';
import DashboardCard from '../../components/DashboardCard';

const TeacherDashboard = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <DashboardCard title="Assigned Courses" count={5} color="bg-blue-500" />
        <DashboardCard title="Total Students" count={30} color="bg-green-500" />
        <DashboardCard title="Pending Assignments" count={2} color="bg-yellow-500" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">View Student Progress</h3>
        <p>Track the progress of your students and their grades.</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Manage Grades</h3>
        <p>Update and manage student grades for assignments and exams.</p>
      </div>
    </div>
  );
};

export default TeacherDashboard;
