// server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const xlsx = require("xlsx");
const fs = require("fs");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to the Excel file (where users will be stored)
const filePath = "users.xlsx";

// Check if the Excel file exists, create one if it doesn't
if (!fs.existsSync(filePath)) {
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet([]);
  xlsx.utils.book_append_sheet(wb, ws, "Users");
  xlsx.writeFile(wb, filePath);
}

// API to handle user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Read the Excel file
  const wb = xlsx.readFile(filePath);
  const ws = wb.Sheets["Users"];
  const users = xlsx.utils.sheet_to_json(ws);

  // Find the user by email and password
  const user = users.find((u) => u.Email === email && u.Password === password);

  // Respond based on whether the user is found
  if (user) {
    res.json({ success: true, message: "Login Successful!" });
  } else {
    res.status(401).json({ success: false, message: "Invalid Credentials!" });
  }
});

// API to handle user signup (add new users to Excel)
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Read the Excel file
  const wb = xlsx.readFile(filePath);
  const ws = wb.Sheets["Users"];
  const users = xlsx.utils.sheet_to_json(ws);

  // Check if the user already exists
  if (users.some((u) => u.Email === email)) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // Add the new user
  users.push({ Email: email, Password: password });
  const newWs = xlsx.utils.json_to_sheet(users);
  wb.Sheets["Users"] = newWs;

  // Save the updated Excel file
  xlsx.writeFile(wb, filePath);

  res.json({ success: true, message: "Signup Successful!" });
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Fetch all users
app.get("/users", (req, res) => {
    // Read the Excel file
    const wb = xlsx.readFile(filePath);
    const ws = wb.Sheets["Users"];
    const users = xlsx.utils.sheet_to_json(ws);
  
    // Send the user data as response
    res.json(users);
  });
  

  // Mocking a database for illustration
let salesData = {
  productSales: 150, // Total product sales
  revenueToday: 3200, // Revenue received today
  ordersToday: 45,    // Number of orders received today
};

// Endpoint to get the dashboard data
app.get("/dashboard", (req, res) => {
  res.json(salesData); // Return the sales data
});

