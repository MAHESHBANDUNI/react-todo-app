import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedText.trim()) {
      dispatch(editTask(task.id, editedText));
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
          className="task-item__edit-input"
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            className="task-item__checkbox"
          />
          <span className="task-item__text">{task.text}</span>
          <button onClick={() => setIsEditing(true)} className="task-item__edit-btn">
            Edit
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))} className="task-item__delete-btn">
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default TaskItem;