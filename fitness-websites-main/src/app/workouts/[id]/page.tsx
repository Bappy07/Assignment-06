
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Workout } from "@/types/workout";
import WorkoutActions from "@/components/workout/workoutAction";

type WorkoutDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  // Invalid workout ID
  if (!response.ok) {
    notFound();
  }

  const workout: Workout = await response.json();

  return (
    <main className="min-h-screen bg-[#0F1115] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Back */}
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-medium text-[#9CA3AF] hover:text-white"
        >
          ← Back to Library
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#15181D]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
              Workout Details
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#9CA3AF]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Key Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#252A32] bg-[#15181D]">
              <div className="border-b border-[#252A32] px-5 py-4">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                  Key Specs
                </h2>
              </div>

              <div className="divide-y divide-[#252A32]">
                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Equipment
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.equipment}
                  </span>
                </div>

          <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Difficulty
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.difficulty}
                  </span>
                </div>

          <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Sets
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.sets}
                  </span>
                </div>

          <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Reps
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.reps}
                  </span>
                </div>

            <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Duration
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Calories
                  </span>
                  <span className="text-sm font-semibold">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between px-5 py-4">
                  <span className="text-sm text-[#9CA3AF]">
                    Rating
                  </span>
                  <span className="text-sm font-semibold">
                    ★ {workout.rating}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="shrink-0 text-sm font-bold text-white">
                      {index + 1}.
                    </span>
                    <p className="text-sm leading-6 text-[#9CA3AF]">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}

