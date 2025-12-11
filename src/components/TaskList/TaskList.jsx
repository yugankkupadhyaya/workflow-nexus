import React from 'react';

const TaskList = ({ tasks }) => {
  // Helper: Convert category to priority color + label
  const getPriority = (category) => {
    switch (category) {
      case 'work':
        return { label: 'High Priority', color: 'text-red-600' };
      case 'meeting':
        return { label: 'Medium Priority', color: 'text-yellow-600' };
      default:
        return { label: 'Low Priority', color: 'text-green-600' };
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Your Tasks</h2>

      <ul className="space-y-4">
        {tasks.map((task) => {
          const priority = getPriority(task.category);

          return (
            <li
              key={task.id}
              className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Priority + Date */}
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${priority.color}`}>{priority.label}</span>

                <span className="text-sm text-neutral-500">{formatDate(task.date)}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 mt-2">
                {task.title} — {task.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
