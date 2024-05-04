import React from 'react';
import '../css/style.css'; 

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="todo-checkbox"
      />
      <span
        className={todo.completed ? 'completed' : 'not-completed'}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="todo-delete-button"
      >
        Hapus
      </button>
    </div>
  );
};

export default TodoItem;
