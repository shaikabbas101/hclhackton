import React from "react";
import Header from "../components/Header";

export default function HealthTips() {
  const tips = [
    "Drink a glass of water after waking up",
    "Take a 10 minute walk after lunch",
    "Aim for 7-8 hours of sleep",
  ];

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Health Tips</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg shadow-md"
            >
              <p className="text-lg text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
