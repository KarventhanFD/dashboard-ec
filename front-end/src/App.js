import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
//import ProductCard from "./components/ProductCard";
import CartPages from "./Pages/CartPages"; // New Cart Page
import { CartProvider } from "./context/CartContext"; // Import Cart Context
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import UsersList from "./components/UsersList";
import { User } from "lucide-react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<CartPages />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
     
    
    </CartProvider>
   
  );
}

export default App;
