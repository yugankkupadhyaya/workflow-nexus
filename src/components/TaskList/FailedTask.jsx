import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskList from './TaskList';

const FailedTask = () => {
  const { tasks } = useContext(TaskContext);
  const filtered = tasks.filter((task) => task.status === 'failed');

  return <TaskList tasks={filtered} />;
};

export default FailedTask;
