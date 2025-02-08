import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { User } from "lucide-react";
import UsersList from "./UsersList";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Registering chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  // Sample data for the pie chart
  const data = {
    labels: ["Products", "Sales Today", "Revenue Collected"],
    datasets: [
      {
        data: [30, 45, 25], // Example values: number of products, sales today, and revenue collected
        backgroundColor: ["#ff6347", "#3e95cd", "#32cd32"], // Different colors for each segment
        hoverBackgroundColor: ["#ff4500", "#1e90ff", "#228b22"],
      },
    ],
  };

  
    const { cart } = useContext(CartContext); 
  
    // Calculate total price
    const TotalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  // Sample text data for your dashboard
  const products = 100; // Example product count
  const salesToday = 45; // Example sales count
  const revenueCollected = TotalPrice; // Example revenue in rupees

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      
      <div className="dashboard-overview">
        <div className="dashboard-card">
          <h3>Products</h3>
          <p>{products}</p>
        </div>
        <div className="dashboard-card">
          <h3>Sales Today</h3>
          <p>{salesToday}</p>
        </div>
        <div className="dashboard-card">
          <h3>Revenue Collected</h3>
          <p>₹{revenueCollected.toFixed(2)}</p>
        </div>
      </div>
      <div className="pie-chart-container">
        <h3>Sales Overview</h3>
        {/* Container with fixed width for a medium sized chart */}
        <div style={{ width: "250px", margin: "auto" }}>
        <Pie data={data} width={250} height={250} options={{ maintainAspectRatio: false }} />

        </div>
      </div>
    </div>

   
  );

}
export default Dashboard;
