import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function ProviderView() {
  const { providerId, patientId } = useParams();
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Provider View</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Provider {providerId} — patient {patientId} compliance summary (stub)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Logs & compliance chart
            </h2>
            <p className="text-gray-600">(Implement)</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Recent activity & reminders
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
