import React from 'react';
import Header from '../others/Header';
import TaskCard from '../others/TaskCard';

const EmployeeDashboard = () => {
  return (
    <>
      <Header />

      {/* Page container */}
      <div className="p-10 flex justify-center">
        {/* Grid of Task Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TaskCard count={0} label="New Tasks" />
          <TaskCard count={0} label="Pending Tasks" />
          <TaskCard count={0} label="Completed Tasks" />
        </div>
      </div>
    </>``
  );
};

export default EmployeeDashboard;
