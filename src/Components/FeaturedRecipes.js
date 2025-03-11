import React from "react";
import "./FeaturedRecipes.css";

const FeaturedRecipes = () => {
  const featuredRecipes = [
    { 
      id: 1, 
      name: "Dry Noodles", 
      ingredients: ["Noodles", "Soy Sauce", "Vegetables", "Garlic"],
      image: "/image1/featured1.jpg" 
    },
    { 
      id: 2, 
      name: "Chilly Chicken", 
      ingredients: ["Chicken", "Chili Sauce", "Capsicum", "Garlic"],
      image: "/image1/featured2.jpg" 
    },
    { 
      id: 3, 
      name: "Mushroom Rice", 
      ingredients: ["Flavoured rice", "Mushrooms", "Spices", "sauces"],
      image: "/image1/Mushroomrice.jpg" 
    },
  ];

  return (
    <div className="featured-section">
      <h2 className="featured-title">Featured Recipes</h2>
      <div className="featured-list">
        {featuredRecipes.map((recipe) => (
          <div key={recipe.id} className="featured-card">
            <img src={recipe.image} alt={recipe.name} className="featured-image" />
            <h3 className="featured-name">{recipe.name}</h3>
            <p className="featured-ingredients">Ingredients: {recipe.ingredients.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipes;
