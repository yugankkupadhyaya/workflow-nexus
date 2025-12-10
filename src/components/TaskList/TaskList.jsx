import React from 'react';

const TaskList = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Your Tasks</h2>

      <ul className="space-y-4">
        {/* Task Item */}
        <li className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition">
          {/* Priority + Date */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-red-600">High Priority</span>
            <span className="text-sm text-neutral-500">12 Jan 2025</span>
          </div>

          {/* Description */}
          <p className="text-sm text-neutral-600 mt-2">Complete employee report submission.</p>
        </li>

        {/* Another Task */}
        <li className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-yellow-600">Medium Priority</span>
            <span className="text-sm text-neutral-500">15 Jan 2025</span>
          </div>

          <p className="text-sm text-neutral-600 mt-2">Review task assignments.</p>
        </li>

        {/* Another Task */}
        <li className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-green-600">Low Priority</span>
            <span className="text-sm text-neutral-500">20 Jan 2025</span>
          </div>

          <p className="text-sm text-neutral-600 mt-2">Update internal documentation.</p>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
