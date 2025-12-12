import React, { useContext } from 'react';
import Header from '../others/Header';
import TaskCard from '../others/TaskCard';
import TaskList from '../TaskList/TaskList';

import { AuthContext } from '../../context/AuthContext';
import { TaskContext } from '../../context/TaskContext';

const EmployeeDashboard = () => {
  const { user } = useContext(AuthContext);

  // 🔥 USE GLOBAL CONTEXT TASKS (Not user.tasks)
  const { tasks } = useContext(TaskContext);

  // Dashboard Counters
  const newTasks = tasks.filter((t) => t.status === 'new').length;
  const pendingTasks = tasks.filter((t) => t.status === 'pending').length;
  const completedTasks = tasks.filter((t) => t.status === 'completed').length;

  return (
    <>
      <Header />

      <div className="p-10 max-w-5xl mx-auto">
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <TaskCard count={newTasks} label="New Tasks" />
          <TaskCard count={pendingTasks} label="Pending Tasks" />
          <TaskCard count={completedTasks} label="Completed Tasks" />
        </div>

        {/* Task List */}
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
