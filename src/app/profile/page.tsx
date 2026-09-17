import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">My Profile 👤</h1>

        <p className="mt-2 text-gray-500">
          View your account information.
        </p>

        <div className="mt-6 space-y-4 rounded-xl bg-gray-100 p-5">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{session.user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{session.user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">User ID</p>
            <p className="break-all font-medium">{session.user.id}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="/dashboard"
            className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}