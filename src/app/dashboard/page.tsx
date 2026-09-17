import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Protect dashboard
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Welcome 👋
          </h1>

          <p className="mt-2 text-gray-500">
            You are successfully signed in.
          </p>
        </div>

        {/* User Information */}
        <div className="mt-6 rounded-xl bg-gray-100 p-5">
          <h2 className="mb-4 text-lg font-semibold">
            Account Information
          </h2>

          <div className="space-y-3">
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {session.user.name}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {session.user.email}
            </p>

            <p className="break-all">
              <span className="font-semibold">User ID:</span>{" "}
              {session.user.id}
            </p>
          </div>
        </div>

        {/* Sign Out */}
        <div className="mt-6">
          <SignOutButton />
        </div>
      </div>
    </main>
  );
}