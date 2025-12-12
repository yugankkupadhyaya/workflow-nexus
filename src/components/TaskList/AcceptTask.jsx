import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskList from './TaskList';

const AcceptTask = () => {
  const { tasks } = useContext(TaskContext);
  const filtered = tasks.filter((task) => task.status === 'pending');

  return <TaskList tasks={filtered} />;
};

export default AcceptTask;
