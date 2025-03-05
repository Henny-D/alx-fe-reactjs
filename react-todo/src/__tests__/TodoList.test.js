import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList";
import '@testing-library/jest-dom';

test("renders the TodoList component with initial todos", () => {
    render(<TodoList />);
  
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });
  
  test("allows the user to add a new todo", () => {
    render(<TodoList />);
  
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add/i);
  
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);
  
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });
  
  test("allows the user to toggle a todo's completion status", () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText(/Learn React/i);
  
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  
    fireEvent.click(todoItem);
  
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  
    fireEvent.click(todoItem);
  
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });
  
  test("allows the user to delete a todo", async () => {
    render(<TodoList />);
  
    const todoItem = screen.getByText(/Learn React/i);
    const deleteButtons = screen.getAllByText(/Delete/i);
  
   
    const deleteButton = deleteButtons[0];
  
    fireEvent.click(deleteButton);
  
    await waitFor(() => {
      
      expect(todoItem).not.toBeInTheDocument();
    });
  });