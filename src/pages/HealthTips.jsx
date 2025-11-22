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
        <h1 className="text-2xl font-semibold mb-4">Health Tips</h1>
        <div className="grid gap-4">
          {tips.map((t, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              {t}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
