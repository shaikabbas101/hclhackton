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
              This is your dashboard — track daily goals, view reminders, and
              tips.
            </p>
          </Card>
          <Card title="Progress">
            <p className="text-sm">
              You have completed <span className="font-bold">3 of 5 goals</span>{" "}
              this week.
            </p>
          </Card>
          <Card title="Provider">
            <p className="text-sm">
              Assigned provider: <span className="font-bold">Dr. Sharma</span>
            </p>
          </Card>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DUMMY_GOALS.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Reminders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DUMMY_REMINDERS.map((reminder) => (
              <ReminderCard key={reminder.id} reminder={reminder} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Health Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="Weekly Activity">
              <p className="text-sm">
                You walked <span className="font-bold">56,000 steps</span> this
                week.
              </p>
            </Card>
            <Card title="Hydration">
              <p className="text-sm">
                You drank <span className="font-bold">14 liters</span> of water
                this week.
              </p>
            </Card>
            <Card title="Sleep Analysis">
              <p className="text-sm">
                You averaged <span className="font-bold">7.5 hours</span> of
                sleep per night.
              </p>
            </Card>
            <Card title="Calories Burned">
              <p className="text-sm">
                You burned <span className="font-bold">3,200 calories</span>{" "}
                this week.
              </p>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
