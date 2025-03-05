import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Implement form handling", completed: false },
    { id: 4, text: "Implement data handling", completed: false },
    { id: 5, text: "Test the App", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return; // Avoid adding empty todos
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(""); // Clear the input after adding the todo
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm 
        addTodo={addTodo} 
        newTodo={newTodo} 
        setNewTodo={setNewTodo} 
      />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

