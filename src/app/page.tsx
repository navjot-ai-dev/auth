import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#030712]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-lg shadow-lg shadow-violet-500/30">
              🛡️
            </div>

            <span className="text-xl font-bold tracking-tight">
              DevAuth
            </span>
          </Link>

          {/* Navbar buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="rounded-xl border border-violet-500/50 px-5 py-2.5 text-sm font-medium transition hover:bg-violet-500/10"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-violet-500/25 transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative min-h-screen overflow-hidden">

        {/* 3D scene */}
        <div className="absolute inset-0">
          <ThreeHero />
        </div>

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[50%] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

          <div className="absolute right-[5%] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20">

          <div className="w-full max-w-2xl">

            {/* Small badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-gray-200 backdrop-blur-md">
              <span>🚀</span>
              <span>DevAuth</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">

              <span className="block">
                Authentication
              </span>

              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                made simple.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              A modern authentication starter built with
              Next.js, Better Auth, Drizzle ORM and Neon
              PostgreSQL.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/sign-up"
                className="group rounded-xl bg-white px-7 py-3.5 font-semibold text-black shadow-xl shadow-white/10 transition duration-300 hover:-translate-y-1"
              >
                Get Started
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/sign-in"
                className="rounded-xl border border-white/30 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Sign In
              </Link>

            </div>

            {/* Technology badges */}
            <div className="mt-12 flex flex-wrap gap-3">

              <TechBadge
                icon="N"
                name="Next.js"
              />

              <TechBadge
                icon="🛡"
                name="Better Auth"
              />

              <TechBadge
                icon="≈"
                name="Drizzle"
              />

              <TechBadge
                icon="N"
                name="Neon"
              />

            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </section>

      {/* ================= FEATURES ================= */}

      <section className="relative border-t border-white/10 bg-[#030712] px-6 py-28">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">

          {/* Section heading */}
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
              Everything you need
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for modern applications
            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <FeatureCard
              icon="🔐"
              title="Secure Authentication"
              description="Sign up, sign in and sign out with Better Auth."
            />

            <FeatureCard
              icon="👤"
              title="User Profiles"
              description="Manage names, profile images and account information."
            />

            <FeatureCard
              icon="⚡"
              title="Modern Stack"
              description="Next.js, Drizzle ORM and Neon PostgreSQL."
            />

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#030712] px-6 py-10">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              🛡️
            </div>

            <span className="font-semibold">
              DevAuth
            </span>
          </Link>

          <p className="text-sm text-gray-500">
            Built with Next.js 🚀
          </p>

          <div className="flex gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm">
              N
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
              🛡️
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10">
              ≈
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-green-400">
              N
            </div>

          </div>

        </div>
      </footer>

    </main>
  );
}


/* ================= TECH BADGE ================= */

function TechBadge({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 backdrop-blur-md">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">
        {icon}
      </span>

      {name}
    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-violet-500/20 bg-white/[0.02] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:bg-violet-500/[0.04]">

      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-2xl shadow-lg shadow-violet-500/10 transition group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>

    </div>
  );
}