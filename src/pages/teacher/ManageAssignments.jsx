import React, { useState } from 'react';

const ManageAssignments = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle assignment upload logic here (e.g., API call)
    console.log("Assignment Uploaded:", { title, description, file });
    // Reset form
    setTitle('');
    setDescription('');
    setFile(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Assignments</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Assignment Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          Upload Assignment
        </button>
      </form>
    </div>
  );
};

export default ManageAssignments;
