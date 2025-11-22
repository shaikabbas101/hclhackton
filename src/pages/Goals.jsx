import React from "react";
import Header from "../components/Header";

export default function Goals() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Goal Types</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Create and manage goal templates like Steps, Sleep, Water.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Steps</h2>
            <p className="text-gray-600">Target per day</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Water</h2>
            <p className="text-gray-600">Liters per day</p>
          </div>
        </div>
      </main>
    </div>
  );
}
