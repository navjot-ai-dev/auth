import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Protect dashboard
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4">
        <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
          {/* Welcome */}
          <h1 className="text-3xl font-bold">
            Welcome 👋
          </h1>

          <p className="mt-2 text-gray-500">
            You are successfully signed in.
          </p>

          {/* User Information */}
          <div className="mt-6 rounded-xl bg-gray-100 p-5">
            <h2 className="mb-4 text-lg font-semibold">
              Account Information
            </h2>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <p className="font-medium">
                  {session.user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-medium">
                  {session.user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  User ID
                </p>

                <p className="break-all font-medium">
                  {session.user.id}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Button */}
          <div className="mt-6">
            <a
              href="/profile"
              className="block w-full rounded-lg bg-black px-5 py-3 text-center font-medium text-white hover:bg-gray-800"
            >
              View Profile
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}