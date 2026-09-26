import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="w-full bg-[#0F1115] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex min-h-[520px] items-center gap-10 py-14 lg:flex-row-reverse lg:gap-16">

          {/* Banner Image */}
          <div className="w-full max-w-md">
            <Image
              src="/assets/banner.png"
              alt="FitLog workout"
              width={600}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="max-w-2xl flex-1">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
              Workout Library
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#9CA3AF] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>
            <Link
              href="#library"
              className="mt-8 inline-flex items-center gap-3 rounded-[10px] bg-[#CCFF00] px-6 py-3.5 text-sm font-bold uppercase text-black hover:bg-[#BDF000]"
            >
              Browse Workouts
            <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}