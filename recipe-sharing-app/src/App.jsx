import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Add the form and list components */}
        <AddRecipeForm />

        <Routes>
          {/* Route for Recipe List */}
          <Route path="/" element={<RecipeList />} />
          
          {/* Route for Recipe Details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

