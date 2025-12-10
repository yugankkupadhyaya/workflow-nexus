import React from 'react';

export const AllTask = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6">All Tasks</h2>

      {/* Task Row */}
      <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition">
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          {/* LEFT PART — User + Title */}
          <div className="flex-1">
            <span className="font-semibold text-neutral-800 block mb-1">User: Ramesh</span>

            <h3 className="text-lg font-medium text-neutral-900">Make a UI Design</h3>
          </div>

          {/* RIGHT PART — Description + Status */}
          <div className="flex-1 md:text-right">
            {/* Status Badge */}
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-700 inline-block mb-2">
              Pending
            </span>

            {/* Description */}
            <p className="text-sm text-neutral-500">
              This design includes dashboard layout and modern components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
