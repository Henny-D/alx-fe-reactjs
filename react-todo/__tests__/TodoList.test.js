import React from 'react';
import '@testing-library/jest-dom';
import TodoList from '../src/components/TodoList';
import { render, screen, fireEvent } from '@testing-library/react';


test('renders the TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo between completed and not completed', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  const toggleButton = screen.getAllByText('Toggle')[0];  // Targeting the first toggle button
  fireEvent.click(toggleButton);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(toggleButton);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Build a Todo App'); // Find the todo item you want to delete
    const deleteButton = screen.getAllByText('Delete')[0];  // Find the corresponding delete button
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();  // Check that the todo is no longer in the document
  });
  
  
