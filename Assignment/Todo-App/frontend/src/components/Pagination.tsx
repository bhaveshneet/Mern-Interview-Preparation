

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (
    page: number
  ) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props) {
  return (
    <div className="flex justify-center gap-4 p-5">
      <button
        onClick={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
        disabled={currentPage === 1}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of{" "}
        {totalPages}
      </span>

      <button
        onClick={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
        disabled={
          currentPage === totalPages
        }
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}