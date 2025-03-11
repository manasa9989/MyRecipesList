import React from "react";
import FeaturedRecipes from "./FeaturedRecipes";
import SeasonalRecipes from "./SeasonalRecipes";
import TrendingRecipes from "./TrendingRecipes";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <FeaturedRecipes />
      <SeasonalRecipes />
      <TrendingRecipes />
    </div>
  );
};

export default Home;
