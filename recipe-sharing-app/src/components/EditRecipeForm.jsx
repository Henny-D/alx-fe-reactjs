import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe, onEditComplete }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({id: recipe.id, title, description});
    onEditComplete(); 
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Edit Recipe</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit" className="save-btn">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
