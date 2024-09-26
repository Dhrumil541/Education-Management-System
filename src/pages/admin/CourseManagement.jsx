import React, { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({ title: '', description: '', startDate: '', assignedTeacher: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourses([...courses, course]);
    setCourse({ title: '', description: '', startDate: '', assignedTeacher: '' }); // Reset the form
  };

  return (
    <div className="p-6 bg-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Course Management</h2>
      <form onSubmit={handleSubmit} className="mb-4 bg-white p-4 rounded shadow-md">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          value={course.title}
          onChange={handleChange}
          required
          className="border p-2 rounded mr-2 w-full"
        />
        <input
          type="text"
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
          required
          className="border p-2 rounded mr-2 w-full"
        />
        <input
          type="date"
          name="startDate"
          value={course.startDate}
          onChange={handleChange}
          required
          className="border p-2 rounded mr-2 w-full"
        />
        <input
          type="text"
          name="assignedTeacher"
          placeholder="Assigned Teacher"
          value={course.assignedTeacher}
          onChange={handleChange}
          required
          className="border p-2 rounded mr-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Course</button>
      </form>

      <h3 className="text-xl font-bold mb-2 text-white">Courses List</h3>
      <ul>
        {courses.length > 0 ? (
          courses.map((course, index) => (
            <li key={index} className="border p-2 mb-2 rounded bg-black text-white shadow-md">
              <h4 className="font-bold">{course.title}</h4>
              <p>{course.description}</p>
              <p>Start Date: {course.startDate}</p>
              <p>Assigned Teacher: {course.assignedTeacher}</p>
            </li>
          ))
        ) : (
          <li className="border p-2 mb-2 rounded bg-black text-white shadow-md">
            No courses available.
          </li>
        )}
      </ul>
    </div>
  );
};

export default CourseManagement;
