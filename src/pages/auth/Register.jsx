import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/auth/register", { ...form, role: "patient" });
    nav("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            className="w-full border px-3 py-2 rounded"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            name="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="password"
            className="w-full border px-3 py-2 rounded"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="w-full bg-indigo-600 text-white py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
