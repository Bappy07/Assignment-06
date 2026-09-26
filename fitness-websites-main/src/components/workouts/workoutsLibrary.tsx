
"use client";
import { useState } from "react";
import WorkoutCard from "@/components/workout/workoutCard";
import { Workout } from "@/types/workout";
type WorkoutLibraryProps = {
  workouts: Workout[];
};

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section
      id="library"
      className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
            The Library
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
            Twelve lifts covering every major muscle group.
          </h2>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-lg border border-[#555B65] bg-[#15181D] px-4 py-3 text-sm font-bold text-white outline-none focus:border-[#CCFF00] sm:w-52"
        >
          <option value="duration">Sort By: Duration</option>
          <option value="calories">Sort By: Calories</option>
          <option value="rating">Sort By: Rating</option>
        </select>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
}


