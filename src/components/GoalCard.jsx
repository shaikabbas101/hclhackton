import React from "react";

export default function GoalCard({ goal }) {
  return (
    <div className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold">{goal.title}</h4>
      <p className="text-sm text-gray-500">Target: {goal.target}</p>
    </div>
  );
}
