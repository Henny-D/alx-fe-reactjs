import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Add Recipe Form */}
        <AddRecipeForm />

        <Routes>
          {/* Route for Recipe List */}
          <Route path="/" element={<RecipeList />} />

          {/* Route for Recipe Details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>

        {/* Favorites and Recommendations Sections */}
        <div className="sidebar">
          <FavoritesList />
          <RecommendationsList />
        </div>
      </div>
    </Router>
  );
}


export default App;

