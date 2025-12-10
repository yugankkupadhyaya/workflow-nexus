import React from 'react';

const TaskCard = ({ count, label }) => {
  return (
    <div className="p-6 w-48 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-neutral-900">{count}</h2>
      <p className="text-sm text-gray-500 mt-2 tracking-wide">{label}</p>
    </div>
  );
};

export default TaskCard;
