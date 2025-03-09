import React from 'react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';
import { render, screen, fireEvent } from '@testing-library/react';


test('renders TodoList component with initial todos', () => {
  render(<TodoList />);

  expect(screen.getByText('Demo todo')).toBeInTheDocument();
  expect(screen.getByText('Demo todotwo')).toBeInTheDocument();
});


test('adds a new todo', () => {
  render(<TodoList />);


  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } }); // Simulate user typing
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton); // Simulate user clicking "Add"

  // Check that the new todo is rendered
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});


test('toggles a todo between completed and not completed when clicked', () => {
  render(<TodoList />);

  // Initial Todo Item
  const todoItem = screen.getByText('Demo todo');

  // Check if the todo item is not completed initially (style should not be line-through)
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');

  // Simulate clicking the todo item to mark it as completed
  fireEvent.click(todoItem);

  // Check if the todo item is now completed (style should be line-through)
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  // Simulate clicking the todo item again to mark it as not completed
  fireEvent.click(todoItem);

  // Check if the todo item is not completed again (style should be reset)
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);

  // Find the todo item and the delete button
  const todoItem = screen.getByText('Demo todotwo');
  const deleteButton = screen.getAllByText('Delete')[0]; // Get the first delete button

  // Ensure that the todo item is initially in the document
  expect(todoItem).toBeInTheDocument();

  // Simulate clicking the delete button
  fireEvent.click(deleteButton);

  // Ensure that the todo item is no longer in the document
  expect(todoItem).not.toBeInTheDocument();
});


