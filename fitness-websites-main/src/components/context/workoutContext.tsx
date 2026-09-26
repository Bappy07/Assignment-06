"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Workout } from "@/types/workout";

type ContextType = {
  plan: Workout[];
  saved: Workout[];
  completed: string[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: string) => void;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: string) => void;

  markAsDone: (id: string) => void;
};

const Context = createContext<ContextType | null>(null);

export function ContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
const addToPlan = (workout: Workout) => {
  setPlan((oldPlan) => {
    if (oldPlan.length >= 5) {
      return oldPlan;
    }

    if (oldPlan.some((item) => item.id === workout.id)) {
      return oldPlan;
    }

    return [...oldPlan, workout];
  });
};
  const removeFromPlan = (id: string) => {
    setPlan((oldPlan) =>
      oldPlan.filter((workout) => workout.id !== id)
    );

    // Remove from completed list too
    setCompleted((oldCompleted) =>
      oldCompleted.filter((workoutId) => workoutId !== id)
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((oldSaved) => [...oldSaved, workout]);
  };

  const removeSaved = (id: string) => {
    setSaved((oldSaved) =>
      oldSaved.filter((workout) => workout.id !== id)
    );
  };

  const markAsDone = (id: string) => {
    setCompleted((oldCompleted) => {
      if (oldCompleted.includes(id)) {
        return oldCompleted;
      }

      return [...oldCompleted, id];
    });
  };

  return (
    <Context.Provider
      value={{
        plan,
        saved,
        completed,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useContextData() {
  const context = useContext(Context);

  if (!context) {
    throw new Error(
      "useContextData must be used inside ContextProvider"
    );
  }

  return context;
}