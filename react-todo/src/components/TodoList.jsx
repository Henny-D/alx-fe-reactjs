import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Demo todo', completed: false },
    { text: 'Demo todotwo', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  // Function to toggle the completion status of a todo item
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Function to delete a todo item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input 
        placeholder="Add a new todo" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(index)} // Click the todo item to toggle completion
          >
            {todo.text}
            <button onClick={(e) => { 
              e.stopPropagation(); // Prevent the click event from bubbling up to the <li> element
              deleteTodo(index); // Delete the todo
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
