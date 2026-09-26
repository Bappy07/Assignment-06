
"use client";

import { toast } from "sonner";
import { Workout } from "@/types/workout";
import { useContextData } from "@/components/context/workoutContext";

type WorkoutActionsProps = {
  workout: Workout;
};

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    saved,
    addToPlan,
    saveWorkout,
  } = useContextData();
  const isAdded = plan.some((item) => item.id === workout.id);
  const isSaved = saved.some((item) => item.id === workout.id);
  const handleAdd = () => {
    if (isAdded) {
      toast.custom(() => (
        <div className="rounded-[10px] bg-pink-100 px-5 py-3 text-sm font-bold text-pink-700 shadow-lg">
          ✓ {workout.name} is already in today&apos;s plan
        </div>
      ));

      return;
    }
        if (plan.length >= 5) {
          toast.custom(() => (
            <div className="rounded-[10px] bg-yellow-100 px-5 py-3 text-sm font-bold text-yellow-800 shadow-lg">
              ⚠️ Today&apos;s plan is full. Maximum 5 workouts allowed.
            </div>
          ));

          return;
        }
    addToPlan(workout);
    toast.success("Added to today's plan");
  };
  const handleSave = () => {
    if (isSaved) {
      toast.custom(() => (
        <div className="rounded-[10px] bg-green-100 px-5 py-3 text-sm font-bold text-green-700 shadow-lg">
          ✓ {workout.name} is already saved
        </div>
      ));
      return;
    }

    // Save workout
    saveWorkout(workout);

    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      {/* Add to Plan */}
      <button
        type="button"
        onClick={handleAdd}
        className={`flex flex-1 items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-bold transition ${
          isAdded
            ? "cursor-default bg-[#252A32] text-[#9CA3AF]"
            : "bg-[#CCFF00] text-black hover:bg-[#BDF000]"
        }`}
      >
        <span>{isAdded ? "✓" : "＋"}</span>

        {isAdded
          ? "Already selected"
          : "Add to today's plan"}
      </button>

      {/* Save for Later */}
      <button
        type="button"
        onClick={handleSave}
        className={`flex-1 rounded-[10px] px-6 py-3.5 text-sm font-bold transition ${
          isSaved
            ? "cursor-default border border-[#252A32] text-[#9CA3AF]"
            : "border border-[#555B65] text-white hover:border-white"
        }`}
      >
        {isSaved
          ? "✓ Already saved"
          : "Save for later"}
      </button>
    </div>
  );
}

