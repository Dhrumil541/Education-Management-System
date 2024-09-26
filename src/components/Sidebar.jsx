import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../context/AuthContext'; // Import the AuthContext

const Sidebar = ({ role }) => {
  const { logout } = useAuth(); // Destructure logout from useAuth
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = async () => {
     // Await the logout function to ensure completion
      navigate('/login'); // Redirect to the Login page after logout
   
  };

  const getLinks = () => {
    switch (role) {
      case 'admin':
        return (
          <>
            <Link to="/admin/dashboard" className="block p-2">Dashboard</Link>
            <Link to="/admin/manage-courses" className="block p-2">Manage Courses</Link>
            <Link to="/admin/manage-users" className="block p-2">Manage Users</Link>
          </>
        );
      case 'teacher':
        return (
          <>
            <Link to="/teacher/dashboard" className="block p-2">Dashboard</Link>
            <Link to="/teacher/manage-assignments" className="block p-2">Manage Assignments</Link>
            <Link to="/teacher/grade-submissions" className="block p-2">Grade Submissions</Link>
          </>
        );
      case 'student':
        return (
          <>
            <Link to="/student/dashboard" className="block p-2">Dashboard</Link>
            <Link to="/student/view-courses" className="block p-2">View Courses</Link>
            <Link to="/student/submit-assignments" className="block p-2">Submit Assignments</Link>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      {getLinks()}
      <button 
        onClick={handleLogout} 
        className="mt-4 block w-full bg-red-600 p-2 rounded text-center"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
