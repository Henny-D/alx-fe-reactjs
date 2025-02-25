import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onRecipeDeleted }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onRecipeDeleted) {
      onRecipeDeleted();
    }
    navigate('/recipes'); // Redirect to the recipes list or any other page
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;