import React, { useState } from 'react';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    assignedTeacher: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here (e.g., API call)
    console.log("Course Created:", courseData);
    // Reset form
    setCourseData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      assignedTeacher: ''
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="border rounded p-2 w-full"
          required
        />
        <textarea
          name="description"
          value={courseData.description}
          onChange={handleChange}
          placeholder="Course Description"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="date"
          name="startDate"
          value={courseData.startDate}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="date"
          name="endDate"
          value={courseData.endDate}
          onChange={handleChange}
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="text"
          name="assignedTeacher"
          value={courseData.assignedTeacher}
          onChange={handleChange}
          placeholder="Assigned Teacher"
          className="border rounded p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
