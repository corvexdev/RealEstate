import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await login(email, password);

      setUser(user);

      console.log(user);

      alert(`Welcome ${user.name}`);

      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />

          <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;