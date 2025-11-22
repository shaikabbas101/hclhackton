import React from "react";
import Header from "../components/Header";

export default function Goals() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Goal Types</h1>
        <p className="mb-4">
          Create and manage goal templates like Steps, Sleep, Water.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            Steps — target per day
          </div>
          <div className="p-4 bg-white rounded shadow">
            Water — liters per day
          </div>
        </div>
      </main>
    </div>
  );
}
