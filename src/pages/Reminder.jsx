import React from "react";
import Header from "../components/Header";

export default function Reminder() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">
          Preventive Care Reminders
        </h1>
        <p className="mb-4">
          Create reminders for vaccinations, screenings, appointments.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-white rounded shadow">
            Reminder card example
          </div>
        </div>
      </main>
    </div>
  );
}
