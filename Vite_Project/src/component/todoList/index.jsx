import React, { useState } from 'react';
import './todolist.scss';
import TodoItem from '../todoItem/index'
const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <input type="text" placeholder="Add todo" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTodo(e.target.value);
          e.target.value = '';
        }
      }} />
      <button onClick={(e) => {
        if (e.key === 'Enter') {
          addTodo(e.target.value);
          e.target.value = '';
        }
      }}>Add ToDo</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
