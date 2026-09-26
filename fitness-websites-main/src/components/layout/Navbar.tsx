"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextData } from "@/components/context/workoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useContextData();
  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workouts");
    

  const isPlanActive = pathname.startsWith("/my-plan");

  return (
    <nav className="w-full border-b border-[#252A32] bg-[#15181D]">
      <div className="navbar container mx-auto min-h-20 px-4 sm:px-6 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square md:hidden"
            >
              ☰
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box border border-[#252A32] bg-[#15181D] p-2 shadow-lg"
            >
              <li>
                <Link
                  href="/"
                  className={isWorkoutActive ? "bg-white text-black" : ""}
                >
                  Workout
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={isPlanActive ? "bg-white text-black" : ""}
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="FitLog Logo"
              width={42}
              height={42}
              priority
            />
            <span className="text-xl font-bold tracking-tight text-white">
              FitLog
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal items-center gap-2 p-0">
            <li>
              <Link
                href="/"
                className={`rounded-full px-5 py-2.5 text-sm font-medium ${
                  isWorkoutActive
                    ? "bg-white text-black"
                    : "text-[#9CA3AF] hover:bg-[#20242B] hover:text-white"
                }`}
              >
                Workout
              </Link>
            </li>
            <li>
              <Link
                href="/my-plan"
                className={`rounded-full px-5 py-2.5 text-sm font-medium ${
                  isPlanActive
                    ? "bg-white text-black"
                    : "text-[#9CA3AF] hover:bg-[#20242B] hover:text-white"
                }`}
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#BDF000]"
          >
            <span>Plan</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1.5 text-xs text-[#CCFF00]">
                {plan.length}
              </span>
          </Link>
          <Link
            href="/my-plan?saved=true"
            className="flex items-center gap-2 rounded-full border border-[#555B65] px-4 py-2 text-sm font-medium text-white transition hover:border-white"
          >
            <span>Saved</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#555B65] px-1.5 text-xs text-[#9CA3AF]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}




