import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskList = ({ tasks }) => {
  const { deleteTask, updateStatus } = useContext(TaskContext);

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
              {/* Priority + Date + Status Dropdown */}
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${priority.color}`}>{priority.label}</span>

                <span className="text-sm text-neutral-500">{formatDate(task.date)}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-600 mt-2">
                {task.title} — {task.description}
              </p>

              {/* Status + Delete */}
              <div className="flex items-center justify-between mt-3">
                <select
                  className="border rounded-md px-2 py-1 text-sm"
                  value={task.status}
                  onChange={(e) => updateStatus(task.id, e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 text-sm font-semibold hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
