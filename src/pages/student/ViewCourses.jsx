import React from 'react';

const ViewCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Programming',
      description: 'Learn the basics of programming using Python.',
      assignments: [
        { id: 1, title: 'Assignment 1', submitted: false },
        { id: 2, title: 'Assignment 2', submitted: true },
      ],
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Build responsive websites using HTML, CSS, and JavaScript.',
      assignments: [],
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Courses</h2>
      {courses.map(course => (
        <div key={course.id} className="mb-4 border p-4 rounded">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p>{course.description}</p>
          <h4 className="mt-2 font-bold">Assignments:</h4>
          {course.assignments.length > 0 ? (
            course.assignments.map(assignment => (
              <div key={assignment.id} className="mt-2">
                <span>{assignment.title} - </span>
                {assignment.submitted ? (
                  <span className="text-green-500">Submitted</span>
                ) : (
                  <span className="text-red-500">Not Submitted</span>
                )}
              </div>
            ))
          ) : (
            <p>No assignments for this course.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ViewCourses;
