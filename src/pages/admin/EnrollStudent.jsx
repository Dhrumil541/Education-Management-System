import React, { useState } from 'react';

const EnrollStudent = () => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    courseId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle enrollment logic here (e.g., API call)
    console.log("Student Enrolled:", studentData);
    // Reset form
    setStudentData({
      studentName: '',
      courseId: ''
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Enroll Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="studentName"
          value={studentData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          name="courseId"
          value={studentData.courseId}
          onChange={handleChange}
          placeholder="Course ID"
          className="border rounded p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Enroll Student
        </button>
      </form>
    </div>
  );
};

export default EnrollStudent;
