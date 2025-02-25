import React, { useState } from 'react';
import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const EditRecipeForm = ({ recipe, onClose }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate(); // Initialize navigate



    const handleSaveChanges = () => {
    const updatedRecipe = { ...recipe, title, description };
    updateRecipe(updatedRecipe);
    
    navigate('/'); // Redirect to the recipe list page
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Recipe</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
        />
        <button onClick={handleSaveChanges} className="btn btn-primary">Save Changes</button>
        <button onClick={onClose} className="btn btn-secondary">Cancel</button>
      </div>
    </div>
  );
};

export default EditRecipeForm;


