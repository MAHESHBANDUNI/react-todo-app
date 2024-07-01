import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

/**
 * TaskInput Component
 * 
 * This component renders an input field and a button to add new tasks.
 * It uses local state to manage the input field and dispatches an action to add the task to the Redux store.
 */
const TaskInput = () => {
  // Local state to manage the input field value
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  /**
   * Handles the form submission
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Dispatch action to add task if the input is not empty
      dispatch(addTask(task));
      // Clear the input field after adding the task
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="task-input__field"
      />
      <button type="submit" className="task-input__button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
