// UsersList.js
import React, { useEffect, useState } from "react";
import axios from "axios";  // Import Axios to make HTTP requests

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users data from the backend server
    axios.get("http://localhost:5000/users")
      .then(response => {
        // Set the users data to the state
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []); // Empty dependency array to run this effect once on component mount

  return (
    <div>
      <h2>Register Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.Email}</strong>
            <p>Password: {user.Password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
