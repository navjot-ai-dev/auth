import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome 👋
        </h1>

        <p className="mt-2 text-gray-500">
          You are successfully signed in.
        </p>

        <div className="mt-6 rounded-xl bg-gray-100 p-4">
          <p>
            <strong>Name:</strong> {session.user.name}
          </p>

          <p className="mt-2">
            <strong>Email:</strong> {session.user.email}
          </p>

          <p className="mt-2">
            <strong>User ID:</strong> {session.user.id}
          </p>
        </div>
      </div>
    </main>
  );
}