import React, { useState } from 'react';

const AssignGrades = () => {
  const [gradeData, setGradeData] = useState({
    studentName: '',
    courseId: '',
    grade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGradeData({ ...gradeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle grade assignment logic here (e.g., API call)
    console.log("Grade Assigned:", gradeData);
    // Reset form
    setGradeData({
      studentName: '',
      courseId: '',
      grade: ''
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Assign Grades</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="studentName"
          value={gradeData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          name="courseId"
          value={gradeData.courseId}
          onChange={handleChange}
          placeholder="Course ID"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          name="grade"
          value={gradeData.grade}
          onChange={handleChange}
          placeholder="Grade"
          className="border rounded p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Assign Grade
        </button>
      </form>
    </div>
  );
};

export default AssignGrades;
