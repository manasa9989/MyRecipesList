import React, { createContext, useState } from "react";

// Create Context
export const RecipeContext = createContext();

// Provider Component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Pasta Alfredo", image: "pasta.jpg" },
    { id: 2, name: "Spicy Noodles", image: "noodles.jpg" },
    { id: 3, name: "Chicken Curry", image: "chicken.jpg" },
    { id: 4, name: "Egg Roll", image: "eggroll.jpg" },
    { id: 5, name: "Momos", image: "momos.jpg" },
  ]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  );
};
