import React from 'react';
import DataTable from '../../components/DataTable';

const ManageCourses = () => {
  // Columns definition for the DataTable
  const columns = React.useMemo(
    () => [
      { Header: 'Course ID', accessor: 'id' },
      { Header: 'Course Title', accessor: 'title' },
      { Header: 'Description', accessor: 'description' },
      { Header: 'Start Date', accessor: 'startDate' },
      { Header: 'Assigned Teacher', accessor: 'assignedTeacher' },
    ],
    []
  );

  // Data for the table
  const data = React.useMemo(
    () => [
      { id: 1, title: 'Mathematics', description: 'Math course', startDate: '2024-01-10', assignedTeacher: 'John Doe' },
      { id: 2, title: 'Physics', description: 'Physics course', startDate: '2024-02-10', assignedTeacher: 'Jane Smith' },
      { id: 3, title: 'Chemistry', description: 'Chemistry course', startDate: '2024-03-15', assignedTeacher: 'Emily Johnson' },
      { id: 4, title: 'Biology', description: 'Biology course', startDate: '2024-04-20', assignedTeacher: 'Michael Brown' },
      // Add more data as needed
    ],
    []
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default ManageCourses;
