import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, getUserFromToken } from "../utils/auth";

export default function Header() {
  const user = getUserFromToken();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-bold text-lg flex items-center gap-2">
          <img src="/src/assets/logo.svg" className="w-8" />
          HealthTracker
        </Link>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/goals">Goals</Link>
          <Link to="/reminders">Reminders</Link>
          <Link to="/health-tips">Tips</Link>

          {user && (
            <button
              className="bg-indigo-600 text-white px-3 py-1 rounded"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </nav>
      </div>

      {open && (
        <div className="md:hidden px-4 py-4 space-y-3 bg-white shadow">
          <Link className="block" to="/dashboard">
            Dashboard
          </Link>
          <Link className="block" to="/goals">
            Goals
          </Link>
          <Link className="block" to="/reminders">
            Reminders
          </Link>
          <Link className="block" to="/health-tips">
            Tips
          </Link>

          {user && (
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
