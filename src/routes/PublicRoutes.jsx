import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
import Goals from "../pages/Goals";
import ProviderView from "../pages/ProviderView";
import HealthTips from "../pages/HealthTips";
import Reminders from "../pages/Reminder";
import ProtectedRoute from "./ProtectedRoutes";

export default function PublicRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/goals"
        element={
          <ProtectedRoute>
            <Goals />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reminders"
        element={
          <ProtectedRoute>
            <Reminders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/provider/:providerId/patient/:patientId"
        element={
          <ProtectedRoute>
            <ProviderView />
          </ProtectedRoute>
        }
      />

      <Route
        path="/health-tips"
        element={
          <ProtectedRoute>
            <HealthTips />
          </ProtectedRoute>
        }
      />

      {/* Redirect root */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
