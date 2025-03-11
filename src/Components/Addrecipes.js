import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addrecipes.css";

const AddRecipe = ({ addRecipe }) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); // ✅ Store local image URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !ingredients || !image) {
      alert("Please fill all fields.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      name,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      image,
    };

    addRecipe(newRecipe);

    // ✅ Clear form inputs AFTER adding
    setName("");
    setIngredients("");
    setImage("");

    // ✅ Navigate to My Recipes page
    navigate("/myrecipes");
  };

  return (
    <div className="add-recipe">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
