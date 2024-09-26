import React from 'react';

const DashboardCard = ({ title, count, color }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color} text-white`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl">{count}</p>
    </div>
  );
};

export default DashboardCard;
