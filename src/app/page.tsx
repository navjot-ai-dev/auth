import Link from "next/link";
import ThreeHero from "@/components/ThreeHero";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        {/* 3D Background */}
        <ThreeHero />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* Logo */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
            🚀 DevAuth
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Authentication
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              made simple.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            A modern authentication starter built with Next.js,
            Better Auth, Drizzle ORM and Neon PostgreSQL.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-black transition hover:scale-105 hover:bg-gray-200"
            >
              Get Started →
            </Link>

            <Link
              href="/sign-in"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            >
              Sign In
            </Link>
          </div>

          {/* Tech stack */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Next.js
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Better Auth
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Drizzle
            </span>

            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
              Neon
            </span>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Features */}
      <section className="border-t border-white/10 bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Everything you need
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for modern applications
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Feature
              icon="🔐"
              title="Secure Authentication"
              description="Sign up, sign in and sign out with Better Auth."
            />

            <Feature
              icon="👤"
              title="User Profiles"
              description="Manage names, profile images and account information."
            />

            <Feature
              icon="⚡"
              title="Modern Stack"
              description="Next.js, Drizzle ORM and Neon PostgreSQL."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500">
        Built with Next.js 🚀
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}