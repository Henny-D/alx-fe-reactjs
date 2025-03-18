import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json") // Ensure data.json is in "public/"
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-600 mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Home</Link>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
          <p className="text-gray-700 text-lg">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="mt-1">{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Steps Section */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">instructions</h2>
            <ol className="list-decimal list-inside text-gray-700">
              {recipe.steps?.map((step, index) => (
                <li key={index} className="mt-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
