// TodoItem.js
import React, { useState } from 'react';
import './todoitem.scss';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
