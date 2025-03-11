import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons
import "./MyRecipes.css";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Pasta Alfredo", ingredients: "Pasta, Cream, Garlic", image: "/image1/pasta.jpg" },
    { id: 2, name: "Spicy Noodles", ingredients: "Noodles, Chili Sauce, Veggies", image: "/image1/noodles.jpg" },
    { id: 3, name: "Red Pasta" , ingredients: "Pasta, mini Tomatos, Chilli sauce, cheese",image: "/image1/Red pasta.jpg"},
    { id: 4, name: "Anda Eggcurry", ingredients: "Eggs, Tomatos&Onions paste, Spices, Curd", image: "/image1/andacurry.jpg" },
    { id: 5, name: "Chicken Rice", ingredients: "Flavoured rice, Chicken, sauces, Spices", image: "/image1/chickenrice.jpg" },
    { id: 6, name: "Egg Rice", ingredients: "Flavoured rice, Eggs, Vinegar, Sauces, Spices", image: "/image1/eggrice.jpg" },

  ]);

  const [showForm, setShowForm] = useState(false);
  const [editRecipeId, setEditRecipeId] = useState(null);
  const [newRecipe, setNewRecipe] = useState({ name: "", ingredients: "", image: null });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewRecipe({ ...newRecipe, image: imageUrl });
    }
  };

  const handleAddOrUpdateRecipe = () => {
    if (newRecipe.name && newRecipe.ingredients) {
      if (editRecipeId) {
        setRecipes(
          recipes.map((recipe) =>
            recipe.id === editRecipeId ? { ...recipe, ...newRecipe } : recipe
          )
        );
      } else {
        setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
      }
      setNewRecipe({ name: "", ingredients: "", image: null });
      setShowForm(false);
      setEditRecipeId(null);
    }
  };

  const handleEdit = (recipe) => {
    setNewRecipe(recipe);
    setEditRecipeId(recipe.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="my-recipes">
      <div className="header-container">
        <h1>My Recipes</h1>
        <button className="add-button" onClick={() => { setShowForm(true); setEditRecipeId(null); }}>+</button>
      </div>

      {showForm && (
        <div className="recipe-form">
          <input type="text" placeholder="Recipe Name" value={newRecipe.name} onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })} />
          <input type="text" placeholder="Ingredients" value={newRecipe.ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })} />
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {newRecipe.image && <img src={newRecipe.image} alt="Preview" className="preview-image" />}
          <button onClick={handleAddOrUpdateRecipe}>{editRecipeId ? "Update Recipe" : "Add Recipe"}</button>
        </div>
      )}

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <div className="recipe-actions">
              <FaEdit className="edit-icon" onClick={() => handleEdit(recipe)} />
              <FaTrash className="delete-icon" onClick={() => handleDelete(recipe.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default MyRecipes;