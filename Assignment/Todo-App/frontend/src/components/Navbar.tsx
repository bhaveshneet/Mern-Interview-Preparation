"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
}

export default function Navbar({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: NavbarProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(logout());

    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">

        <h1 className="text-3xl font-bold whitespace-nowrap">
          Todo App
        </h1>

        <div className="flex-1 flex gap-3">

          <input
            type="text"
            placeholder="Search Todo..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="flex-1 border rounded-lg px-4 py-3 text-lg outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg whitespace-nowrap"
          >
            Search
          </button>

        </div>

        <button
          onClick={() =>
            router.push("/add-todo")
          }
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg whitespace-nowrap"
        >
          Add Todo
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg whitespace-nowrap"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}