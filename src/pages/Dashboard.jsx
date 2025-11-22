import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import GoalCard from "../components/GoalCard";
import ReminderCard from "../components/ReminderCard";

const DUMMY_GOALS = [
  { id: 1, title: "Steps", target: "8000 steps/day" },
  { id: 2, title: "Water", target: "2 L/day" },
  { id: 3, title: "Sleep", target: "7-8 hrs/night" },
];

const DUMMY_REMINDERS = [
  {
    id: 1,
    title: "Flu Vaccine",
    description: "Get flu shot",
    time: "2025-12-01",
  },
  {
    id: 2,
    title: "Dental Checkup",
    description: "Annual dental visit",
    time: "Monthly",
  },
];

export default function Dashboard() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card title="Welcome">
            <p className="text-sm">
              This is your dashboard — track daily goals, view reminders and
              tips.
            </p>
          </Card>
          <Card title="Progress">
            <p className="text-sm">
              You have completed 3 of 5 goals this week.
            </p>
          </Card>
          <Card title="Provider">
            <p className="text-sm">Assigned provider: Dr. Sharma</p>
          </Card>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {DUMMY_GOALS.map((g) => (
              <GoalCard key={g.id} goal={g} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reminders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DUMMY_REMINDERS.map((r) => (
              <ReminderCard key={r.id} reminder={r} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
