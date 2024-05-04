import React, { useState } from 'react';
import './css/style.css';
import TodoList from './Components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <p className='rata'>by <a href='https://www.rata.id/'>RATA.id</a></p>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Tambahkan tugas baru"
          className="todo-input"
        />
        <button variant="primary" onClick={addTodo} className="add-button">Tambahkan</button>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
