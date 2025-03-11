import React from "react";
import "./TrendingRecipes.css";

const TrendingRecipes = () => {
  const trendingRecipes = [
    { 
      id: 1, 
      name: "Egg Roll", 
      ingredients: ["Egg", "Paratha", "Vegetables", "Sauce"],
      image: "/image1/trending1.jpg" 
    },
    { 
      id: 2, 
      name: "Momos", 
      ingredients: ["Flour", "Chicken/Vegetables", "Garlic", "Ginger"],
      image: "/image1/trending2.jpg" 
    },
    { 
      id: 3, 
      name: "Mushroom Rice", 
      ingredients: ["Flavoured rice", "Mushrooms", "Spices", "sauces"],
      image: "/image1/Mushroomrice.jpg" 
    },
  ];

  return (
    <div className="trending-section">
      <h2 className="trending-title">Trending Recipes</h2>
      <div className="trending-list">
        {trendingRecipes.map((recipe) => (
          <div key={recipe.id} className="trending-card">
            <img src={recipe.image} alt={recipe.name} className="trending-image" />
            <h3 className="trending-name">{recipe.name}</h3>
            <p className="trending-ingredients">Ingredients: {recipe.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingRecipes;
