import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map((item) => item.trim());
      if (ingredientList.length < 2) newErrors.ingredients = "At least two ingredients are required.";
    }
    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    } else {
      const stepList = steps.split(".").map((item) => item.trim()).filter(Boolean);
      if (stepList.length < 2) newErrors.steps = "At least two steps are required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: ingredients.split(",")[0] + "...",
      image: "https://via.placeholder.com/150",
      ingredients: ingredients.split(",").map((item) => item.trim()),
      steps: steps.split(".").map((item) => item.trim()).filter(Boolean),
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Recipe Title:</label>
          <input
            type="text"
            className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.title ? "border-red-500" : "border-gray-300"}`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Ingredients (comma-separated):</label>
          <textarea
            className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.ingredients ? "border-red-500" : "border-gray-300"}`}
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Preparation Steps (separate by periods):</label>
          <textarea
            className={`w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.steps ? "border-red-500" : "border-gray-300"}`}
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
