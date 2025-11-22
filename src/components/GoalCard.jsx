import React from "react";

export default function GoalCard({ goal }) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border rounded-lg shadow-md hover:shadow-lg transition">
      <h4 className="font-bold text-lg text-blue-800 mb-2">{goal.title}</h4>
      <p className="text-sm text-gray-600">Target: {goal.target}</p>
    </div>
  );
}
