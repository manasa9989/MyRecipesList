import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/Home";
import MyRecipes from "./Components/MyRecipes";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myrecipes" element={<MyRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
