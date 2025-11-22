import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function ProviderView() {
  const { providerId, patientId } = useParams();
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-semibold">Provider View</h1>
        <p className="text-sm text-gray-500">
          Provider {providerId} — patient {patientId} compliance summary (stub)
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">
            Logs & compliance chart (implement)
          </div>
          <div className="p-4 bg-white rounded shadow">
            Recent activity & reminders
          </div>
        </div>
      </main>
    </div>
  );
}
