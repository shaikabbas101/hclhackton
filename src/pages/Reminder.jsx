import React from "react";
import Header from "../components/Header";

export default function Reminder() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Preventive Care Reminders
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Create reminders for vaccinations, screenings, appointments.
        </p>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Reminder card example
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
