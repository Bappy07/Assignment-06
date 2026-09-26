import Hero from "@/components/layout/Hero";
import WorkoutLibrary from "@/components/workouts/workoutsLibrary";
import { Workout } from "@/types/workout";

export default async function Home() {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await response.json();

  return (
    <main className="bg-[#0F1115] text-white">
      <Hero />

      <WorkoutLibrary workouts={workouts} />
    </main>
  );
}

