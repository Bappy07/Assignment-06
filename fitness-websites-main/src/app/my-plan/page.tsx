"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useContextData } from "@/components/context/workoutContext";
export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
const {
    plan,
    saved,
    completed,
    removeFromPlan,
    removeSaved,
    markAsDone,
} = useContextData();

const currentList = activeTab === "plan" ? plan : saved;
  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );
  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );
  const handleMarkAsDone = (id: string, name: string) => {
    if (completed.includes(id)) {
      return;
    }
    markAsDone(id);
    toast.success(`${name} marked as done`);
  };
  const handleRemove = (id: string, name: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.success(`${name} removed from your plan`);
    } else {
      removeSaved(id);
      toast.success(`${name} removed from saved`);
    }
  };


  return (
    <main className="min-h-screen bg-[#0F1115] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="container mx-auto">
            {/* Header */}
            <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
                Your Log
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase sm:text-5xl">
                MY PLAN
            </h1>

            <p className="mt-4 text-[#9CA3AF]">
                Cap of five lifts for today. Finish them, then load more.
            </p>
            </div>

        <div className="mt-10 grid grid-cols-1 divide-y divide-[#252A32] overflow-hidden rounded-2xl border border-[#252A32] bg-[#15181D] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="p-5">
            <p className="text-sm text-[#9CA3AF]">Exercises</p>
            <p className="mt-2 text-3xl font-black">{plan.length}</p>
          </div>

          <div className="p-5">
            <p className="text-sm text-[#9CA3AF]">Minutes</p>
            <p className="mt-2 text-3xl font-black">{totalMinutes}</p>
          </div>

          <div className="p-5">
            <p className="text-sm text-[#9CA3AF]">Calories</p>
            <p className="mt-2 text-3xl font-black">{totalCalories}</p>
          </div>
        </div>

        <div className="mt-10 flex gap-3 border-b border-[#252A32] pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold ${
              activeTab === "plan"
                ? "bg-white text-black"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-5 py-2.5 text-sm font-bold ${
              activeTab === "saved"
                ? "bg-white text-black"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>


        <div className="mt-8">
          {currentList.length === 0 ? (
            <div className="rounded-2xl border border-[#252A32] bg-[#15181D] px-6 py-16 text-center">
              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-3 max-w-md text-[#9CA3AF]">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#BDF000]"
              >
                Go to workouts
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {currentList.map((workout) => {
                const isCompleted = completed.includes(workout.id);
                return (
                  <div
                    key={workout.id}
                    className="overflow-hidden rounded-2xl border border-[#252A32] bg-[#15181D]"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative h-56 w-full sm:h-auto sm:w-64">
                        <Image
                          src={workout.image}
                          alt={workout.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="text-2xl font-black uppercase">
                          {workout.name}
                        </h2>

                        <p className="mt-2 text-sm text-[#9CA3AF]">
                          {workout.equipment}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#9CA3AF]">
                          <span>◷ {workout.duration} min</span>
                          <span>🔥 {workout.caloriesBurned} kcal</span>
                          <span>★ {workout.rating}</span>
                        </div>


                        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
       
                          <Link
                            href={`/workouts/${workout.id}`}
                            className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-gray-200"
                          >
                            View Details
                          </Link>

                          {activeTab === "plan" && (
                            <button
                              type="button"
                              onClick={() =>
                                handleMarkAsDone(
                                  workout.id,
                                  workout.name
                                )
                              }
                              disabled={isCompleted}
                              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition ${
                                isCompleted
                                  ? "cursor-default bg-[#252A32] text-[#9CA3AF]"
                                  : "bg-[#CCFF00] text-black hover:bg-[#BDF000]"
                              }`}
                            >
                              <span>✓</span>
                              {isCompleted
                                ? "Done"
                                : "Mark as Done"}
                            </button>
                          )}

                            <button
                                type="button"
                                onClick={() =>
                                handleRemove(
                                    workout.id,
                                    workout.name
                                )
                                }
                                aria-label={`Remove ${workout.name}`}
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/40 text-red-500 transition hover:bg-red-500 hover:text-white"
                            >
                                <span className="text-lg leading-none">
                                ×
                                </span>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}



