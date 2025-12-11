import React from 'react';
import Header from '../others/Header';
import TaskCard from '../others/TaskCard';
import TaskList from '../TaskList/TaskList';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';

const EmployeeDashboard = () => {
  const { user } = useContext(AuthContext);
  const tasks = user?.tasks || [];
  const newTasks = tasks.filter((t) => t.active).length;
  const pendingTasks = tasks.filter((t) => !t.active && !t.completed && !t.failed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  console.log('USER:', user);
  console.log('TASKS:', tasks);

  return (
    <>
      <Header />

      {/* Page Wrapper */}
      <div className="p-10 max-w-5xl mx-auto">
        {/* Task Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <TaskCard count={newTasks} label="New Tasks" />
          <TaskCard count={pendingTasks} label="Pending Tasks" />
          <TaskCard count={completedTasks} label="Completed Tasks" />
        </div>

        {/* Task List Section */}
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
