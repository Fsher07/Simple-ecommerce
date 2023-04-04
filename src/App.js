import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basket from "./components/Basket";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/detail/:productId" element={<ProductDetail />} />
          </Routes>
          <Basket />
        </div>
      </div>
    </Router>
  );
}

export default App;
