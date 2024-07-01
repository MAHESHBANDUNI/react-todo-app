import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

/**
 * TaskList Component
 * 
 * This component renders a list of TaskItem components.
 * It uses useSelector to get the tasks from the Redux store.
 */
const TaskList = () => {
  // Select tasks from the Redux store
  const tasks = useSelector(state => state.tasks);

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
