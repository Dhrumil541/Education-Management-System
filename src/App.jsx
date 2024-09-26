import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; 
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCourses from './pages/admin/ManageCourses';
import ManageUsers from './pages/admin/ManageUsers';
import CreateCourse from './pages/admin/CreateCourse';
import EnrollStudent from './pages/admin/EnrollStudent';
import AssignGrades from './pages/admin/AssignGrades';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ManageAssignments from './pages/teacher/ManageAssignments';
import GradeSubmissions from './pages/teacher/GradeSubmissions';
import StudentDashboard from './pages/student/StudentDashboard';
import ViewCourses from './pages/student/ViewCourses';
import SubmitAssignments from './pages/student/SubmitAssignments';
import Login from './pages/Login'; 
import { AuthProvider, useAuth } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

const MainApp = () => {
  const { role } = useAuth();

  if (!role) {
    return <Navigate to="/login" />; // Redirect to login page if role is not set
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar role={role} />
          <div className="flex-1">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              {role === 'admin' && (
                <>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/manage-courses" element={<ManageCourses />} />
                  <Route path="/admin/manage-users" element={<ManageUsers />} />
                  <Route path="/admin/create-course" element={<CreateCourse />} />
                  <Route path="/admin/enroll-student" element={<EnrollStudent />} />
                  <Route path="/admin/assign-grades" element={<AssignGrades />} />
                  <Route path="*" element={<Navigate to="/admin/dashboard" />} />
                </>
              )}
              {role === 'teacher' && (
                <>
                  <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                  <Route path="/teacher/manage-assignments" element={<ManageAssignments />} />
                  <Route path="/teacher/grade-submissions" element={<GradeSubmissions />} />
                  <Route path="*" element={<Navigate to="/teacher/dashboard" />} />
                </>
              )}
              {role === 'student' && (
                <>
                  <Route path="/student/dashboard" element={<StudentDashboard />} />
                  <Route path="/student/view-courses" element={<ViewCourses />} />
                  <Route path="/student/submit-assignments" element={<SubmitAssignments />} />
                  <Route path="*" element={<Navigate to="/student/dashboard" />} />
                </>
              )}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
