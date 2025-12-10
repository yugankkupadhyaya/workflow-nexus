import React from 'react';
import Header from '../others/Header';
import TaskCard from '../others/TaskCard';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = () => {
  return (
    <>
      <Header />

      {/* Page Wrapper */}
      <div className="p-10 max-w-5xl mx-auto">
        {/* Task Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <TaskCard count={0} label="New Tasks" />
          <TaskCard count={0} label="Pending Tasks" />
          <TaskCard count={0} label="Completed Tasks" />
        </div>

        {/* Task List Section */}
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashboard;
