import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logout, getUserFromToken } from "../utils/auth";

export default function Header() {
  const user = getUserFromToken();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const isActive = (path) => location.pathname === path; // Check if the path is active

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
          <Link
            to="/dashboard"
            className={
              isActive("/dashboard") ? "text-indigo-600 font-bold" : ""
            }
          >
            Dashboard
          </Link>
          <Link
            to="/goals"
            className={isActive("/goals") ? "text-indigo-600 font-bold" : ""}
          >
            Goals
          </Link>
          <Link
            to="/reminders"
            className={
              isActive("/reminders") ? "text-indigo-600 font-bold" : ""
            }
          >
            Reminders
          </Link>
          <Link
            to="/health-tips"
            className={
              isActive("/health-tips") ? "text-indigo-600 font-bold" : ""
            }
          >
            Tips
          </Link>

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
          <Link
            className={
              isActive("/dashboard")
                ? "block text-indigo-600 font-bold"
                : "block"
            }
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={
              isActive("/goals") ? "block text-indigo-600 font-bold" : "block"
            }
            to="/goals"
          >
            Goals
          </Link>
          <Link
            className={
              isActive("/reminders")
                ? "block text-indigo-600 font-bold"
                : "block"
            }
            to="/reminders"
          >
            Reminders
          </Link>
          <Link
            className={
              isActive("/health-tips")
                ? "block text-indigo-600 font-bold"
                : "block"
            }
            to="/health-tips"
          >
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
