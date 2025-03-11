import React from "react";
import "./SeasonalRecipes.css";

const SeasonalRecipes = () => {
  const seasonalRecipes = [
    { 
      id: 1, 
      name: "Soupy Maggi", 
      ingredients: ["Maggi", "Water", "Vegetables", "Seasoning"],
      image: "/image1/seasonal1.jpg" 
    },
    { 
      id: 2, 
      name: "Prawns Salad", 
      ingredients: ["Prawns", "Lettuce", "Olive Oil", "Lemon Juice"],
      image: "/image1/seasonal2.jpg" 
    },
    { 
      id: 3, 
      name: "Toast Bread with Blueberries", 
      ingredients: ["Toast", "Banana", "Blueberries", "Chocolate syrup"],
      image: "/image1/Toastbread.jpg" 
    },
  ];

  return (
    <div className="seasonal-section">
      <h2 className="seasonal-title">Seasonal Recipes</h2>
      <div className="seasonal-list">
        {seasonalRecipes.map((recipe) => (
          <div key={recipe.id} className="seasonal-card">
            <img src={recipe.image} alt={recipe.name} className="seasonal-image" />
            <h3 className="seasonal-name">{recipe.name}</h3>
            <p className="seasonal-ingredients">Ingredients: {recipe.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalRecipes;
