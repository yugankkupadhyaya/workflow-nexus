import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskList from './TaskList';

const CompletedTask = () => {
  const { tasks } = useContext(TaskContext);
  const filtered = tasks.filter((task) => task.status === 'completed');

  return <TaskList tasks={filtered} />;
};

export default CompletedTask;
