"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    await authClient.signOut();

    router.push("/sign-in");
    router.refresh();
  }

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="text-xl font-bold"
        >
          DevAuth 🚀
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Dashboard
          </Link>

          <Link
            href="/profile"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Profile
          </Link>

          <button
            onClick={handleSignOut}
            disabled={loading}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </div>
    </nav>
  );
}