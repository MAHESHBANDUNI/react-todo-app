// Action Types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

/**
 * Action creator for adding a new task
 * @param {string} text - The text of the new task
 * @returns {Object} Action object
 */
export const addTask = (text) => ({
  type: ADD_TASK,
  payload: { text },
});

/**
 * Action creator for deleting a task
 * @param {number} id - The id of the task to delete
 * @returns {Object} Action object
 */
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});

/**
 * Action creator for editing a task
 * @param {number} id - The id of the task to edit
 * @param {string} text - The new text for the task
 * @returns {Object} Action object
 */
export const editTask = (id, text) => ({
  type: EDIT_TASK,
  payload: { id, text },
});

/**
 * Action creator for toggling a task's completion status
 * @param {number} id - The id of the task to toggle
 * @returns {Object} Action object
 */
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id },
});
