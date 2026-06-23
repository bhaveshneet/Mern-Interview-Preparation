"use client";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) {
  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}