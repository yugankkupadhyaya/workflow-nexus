import React from 'react';

const CreateTask = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Create Task</h2>

      <form className="space-y-6">
        {/* Task Title */}
        <div>
          <label className="text-sm font-medium text-neutral-700">Task Title</label>
          <input
            type="text"
            placeholder="Make a UI design"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50
            focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-neutral-700">Description</label>
          <textarea
            rows="4"
            placeholder="Detailed description of the task (max 500 words)"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50
            focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-400"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm font-medium text-neutral-700">Date</label>
          <input
            type="date"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50
            focus:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>

        {/* Assign To */}
        <div>
          <label className="text-sm font-medium text-neutral-700">Assign To</label>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50
            focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-neutral-700">Category</label>
          <input
            type="text"
            placeholder="Design, Development, etc."
            className="w-full mt-1 px-4 py-3 rounded-xl border border-neutral-300 bg-neutral-50
            focus:outline-none focus:ring-2 focus:ring-neutral-800 placeholder-neutral-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-neutral-900 text-white text-lg font-semibold
          hover:bg-neutral-800 transition-all shadow-md shadow-neutral-900/30"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
