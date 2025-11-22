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
    <header className="bg-gradient-to-r from-indigo-50 to-indigo-100 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-bold text-xl flex items-center gap-3 text-indigo-800"
        >
          <img
            src="/src/assets/logo.svg"
            className="w-10"
            alt="HealthTracker Logo"
          />
          HealthTracker
        </Link>

        <button
          className="md:hidden p-2 text-indigo-800"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/dashboard"
            className={
              isActive("/dashboard")
                ? "text-indigo-600 font-bold underline"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Dashboard
          </Link>
          <Link
            to="/goals"
            className={
              isActive("/goals")
                ? "text-indigo-600 font-bold underline"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Goals
          </Link>
          <Link
            to="/reminders"
            className={
              isActive("/reminders")
                ? "text-indigo-600 font-bold underline"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Reminders
          </Link>
          <Link
            to="/health-tips"
            className={
              isActive("/health-tips")
                ? "text-indigo-600 font-bold underline"
                : "text-gray-700 hover:text-indigo-600"
            }
          >
            Tips
          </Link>

          {user && (
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
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
        <div className="md:hidden px-6 py-4 space-y-4 bg-indigo-50 shadow">
          <Link
            className={
              isActive("/dashboard")
                ? "block text-indigo-600 font-bold underline"
                : "block text-gray-700 hover:text-indigo-600"
            }
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={
              isActive("/goals")
                ? "block text-indigo-600 font-bold underline"
                : "block text-gray-700 hover:text-indigo-600"
            }
            to="/goals"
          >
            Goals
          </Link>
          <Link
            className={
              isActive("/reminders")
                ? "block text-indigo-600 font-bold underline"
                : "block text-gray-700 hover:text-indigo-600"
            }
            to="/reminders"
          >
            Reminders
          </Link>
          <Link
            className={
              isActive("/health-tips")
                ? "block text-indigo-600 font-bold underline"
                : "block text-gray-700 hover:text-indigo-600"
            }
            to="/health-tips"
          >
            Tips
          </Link>

          {user && (
            <button
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
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
