import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", { email, password });
      alert(response.data.message);
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Error signing up. Try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="p-4 shadow-lg rounded bg-light" onSubmit={handleSignup}>
        <h3 className="text-center mb-4">Signup</h3>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" className="btn btn-success w-100">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
