

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Todo App
      </h1>

      <p className="mb-8 text-center">
        Full-Stack Todo App using Next.js,
        Express.js and MySQL.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Register
        </Link>
      </div>
    </main>
  );
}