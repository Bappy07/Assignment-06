
import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#252A32] bg-[#15181D] transition hover:-translate-y-1 hover:border-[#CCFF00]"
    >
  
      <div className="relative aspect-[4/3] overflow-hidden bg-[#20242B]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-black uppercase leading-tight text-white">
          {workout.name}
        </h3>
        <p className="mt-2 text-sm text-[#9CA3AF]">
          {workout.equipment}
        </p>
        <div className="mt-5 flex items-center gap-4 border-t border-[#252A32] pt-4 text-sm text-[#9CA3AF]">
          <span>◷ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>★ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}

