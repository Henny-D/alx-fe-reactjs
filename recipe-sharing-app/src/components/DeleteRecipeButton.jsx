import React from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onRecipeDeleted }) => { // Added onRecipeDeleted prop
const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onRecipeDeleted) {  // Call the callback if it exists
      onRecipeDeleted(); // Notify the parent component that the recipe is deleted
    }
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;