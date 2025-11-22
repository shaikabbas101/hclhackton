import React from "react";

export default function ReminderCard({ reminder }) {
  return (
    <div className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-bold text-lg text-yellow-800 mb-1">
            {reminder.title}
          </h4>
          <p className="text-sm text-gray-600">{reminder.description}</p>
        </div>
        <span className="text-xs bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
          {reminder.time}
        </span>
      </div>
    </div>
  );
}
