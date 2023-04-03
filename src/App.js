import React from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import Basket from "./components/Basket";
import FilterArea from "./components/FilterArea";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <FilterArea />
        <Home />
        <Basket />
      </div>
    </div>
  );
}

export default App;
