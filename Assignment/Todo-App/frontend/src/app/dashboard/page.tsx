
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged out successfully");

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <div className="bg-white shadow-lg rounded-lg p-10 text-center w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Dashboard 🎉
        </h1>

        <div className="flex flex-col gap-4">
          {/* Go to Todos */}
          <Link
            href="/todos"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Manage Todos
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}