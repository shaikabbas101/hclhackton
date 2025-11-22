import React from "react";

export default function ReminderCard({ reminder }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold">{reminder.title}</h4>
          <p className="text-sm text-gray-500">{reminder.description}</p>
        </div>
        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
          {reminder.time}
        </span>
      </div>
    </div>
  );
}
