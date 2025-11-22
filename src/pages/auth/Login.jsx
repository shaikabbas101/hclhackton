import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { saveToken } from "../../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      saveToken(res.data.token);
      nav("/dashboard");
    } catch (err) {
      alert("Login failed (backend not connected)");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border px-3 py-2 rounded"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          No account?{" "}
          <a href="/register" className="text-indigo-600">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
