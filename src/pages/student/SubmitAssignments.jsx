import React, { useState } from 'react';

const SubmitAssignments = () => {
  const [assignmentId, setAssignmentId] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here (e.g., API call)
    console.log("Assignment Submitted:", { assignmentId, file });
    // Reset form
    setAssignmentId('');
    setFile(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Assignment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Assignment ID:</label>
          <input
            type="text"
            value={assignmentId}
            onChange={(e) => setAssignmentId(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Upload File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Submit Assignment
        </button>
      </form>
    </div>
  );
};

export default SubmitAssignments;
