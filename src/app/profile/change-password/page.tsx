"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setMessage("New password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: false,
      });

      if (error) {
        setMessage(error.message || "Failed to change password.");
        return;
      }

      setMessage("Password changed successfully! ✅");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        router.push("/profile");
        router.refresh();
      }, 1200);
    } catch {
      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">
          Change Password 🔐
        </h1>

        <p className="mt-2 text-gray-500">
          Update your account password.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Current Password */}
          <div>
            <label className="mb-2 block font-medium">
              Current Password
            </label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              required
            />
          </div>

          {/* New Password */}
          <div>
            <label className="mb-2 block font-medium">
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block font-medium">
              Confirm New Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
              required
            />
          </div>

          {/* Message */}
          {message && (
            <div className="rounded-lg bg-gray-100 p-3 text-sm">
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800 disabled:opacity-50"
            >
              {loading ? "Changing..." : "Change Password"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}