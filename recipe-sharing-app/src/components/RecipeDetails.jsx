import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './RecipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
import { useState } from 'react';



const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const recipe = recipes.find((r) => r.id === parseInt(id));
  
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="recipe-details">
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onEditComplete={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          <button onClick={() => { deleteRecipe(recipe.id); navigate('/'); }} className="delete-btn">Delete</button>
        </>
      )}
    </div>
  );
};


export default RecipeDetails;
