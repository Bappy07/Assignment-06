import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#252A32] bg-[#15181D]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-5 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="FitLog Home"
        >
                <Image
                    src="/assets/logo.png"
                    alt="FitLog Logo"
                    width={38}
                    height={38}
                />
          <span className="text-lg font-black tracking-wide text-white">
            FITLOG
          </span>
        </Link>
        <p className="text-center text-xs text-[#9CA3AF] sm:text-sm md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

