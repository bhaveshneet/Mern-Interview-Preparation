"use client";

import { useRouter } from "next/navigation";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  handleSearch: () => void;
}

const SearchIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const LogOutIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const CheckSquareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function Navbar({ searchTerm, setSearchTerm, handleSearch }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ROW 1 — Logo + Add Todo + Logout */}
        <div className="flex items-center justify-between h-14 gap-3">

          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => router.push("/todos")}
          >
            <div className="bg-[#0f2347] text-white p-1.5 rounded-lg">
              <CheckSquareIcon />
            </div>
            <div className="leading-tight">
              <p className="text-base font-bold text-[#0f2347] tracking-tight">Todo List</p>
              <p className="text-[10px] text-gray-400 font-medium -mt-0.5 hidden sm:block">
                Manage your daily tasks
              </p>
            </div>
          </div>

          {/* Desktop search — hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 mx-6 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
            <span className="pl-3 text-gray-400 shrink-0">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search task, category, priority, status..."
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors shrink-0"
            >
              Search
            </button>
          </div>

          {/* Add Todo + Logout */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => router.push("/add-todo")}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              <PlusIcon />
              <span>Add Todo</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-[#0f2347] hover:bg-[#1a3460] text-white text-sm font-semibold rounded-xl transition-colors whitespace-nowrap"
            >
              <LogOutIcon />
              <span>Logout</span>
            </button>
          </div>

        </div>

        {/* ROW 2 — Mobile search bar (only on small screens) */}
        <div className="md:hidden pb-3">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100 transition-all">
            <span className="pl-3 text-gray-400 shrink-0">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search task, category, priority, status..."
              className="flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors shrink-0"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
