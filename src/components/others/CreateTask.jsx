import React, { useState, useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { AuthContext } from '../../context/AuthContext';
import employees from '../../data/employees';

const CreateTask = () => {
  const { addTask } = useContext(TaskContext);
  const { user } = useContext(AuthContext);

  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    assignedTo: '',
    category: '',
  });

  const [showModal, setShowModal] = useState(false); // 🔥 For popup modal

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Employee auto-assigned to himself
    const assignedTo = user.role === 'employee' ? user.email.split('@')[0] : task.assignedTo;

    const newTask = {
      id: Date.now(),
      ...task,
      assignedTo,
      status: 'new',
      priority: 'medium',
    };

    addTask(newTask);

    // Reset form
    setTask({
      title: '',
      description: '',
      date: '',
      assignedTo: '',
      category: '',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Create Task</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-3 border rounded-xl"
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="w-full px-4 py-3 border rounded-xl"
        ></textarea>

        <input
          type="date"
          name="date"
          value={task.date}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-xl"
        />

        {/*  ADMIN Select Employee Button */}
        {user.role === 'admin' && (
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="w-full px-4 py-3 border rounded-xl bg-neutral-100 text-left"
          >
            {task.assignedTo || 'Select Employee'}
          </button>
        )}

        <input
          name="category"
          value={task.category}
          onChange={handleChange}
          placeholder="work / meeting / general"
          className="w-full px-4 py-3 border rounded-xl"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-neutral-900 text-white font-semibold"
        >
          Create Task
        </button>
      </form>

      {/*  POPUP MODAL */}
      {showModal && user.role === 'admin' && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-80 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Assign To</h2>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {employees.employees.map((emp) => (
                <button
                  key={emp.id}
                  onClick={() => {
                    setTask({
                      ...task,
                      assignedTo: emp.email.split('@')[0],
                    });
                    setShowModal(false);
                  }}
                  className="w-full text-left px-4 py-2 bg-neutral-100 rounded-lg hover:bg-neutral-200"
                >
                  {emp.email}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full py-2 bg-neutral-900 text-white rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
