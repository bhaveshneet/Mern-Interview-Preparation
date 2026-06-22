
"use client";

import { useRouter } from "next/navigation";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: number;
}

interface Props {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

export default function TodoItem({
  todo,
  handleDelete,
  handleToggle,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center border-b px-6 py-4 min-h-[90px]">

      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">
          {todo.title}
        </h2>

        {todo.description && (
          <p className="text-gray-600 text-base mt-1">
            {todo.description}
          </p>
        )}
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-3 ml-6">

        <button
          onClick={() =>
            handleToggle(todo.id)
          }
          className={`px-5 py-2 rounded text-white font-medium ${
            todo.completed
              ? "bg-green-600"
              : "bg-orange-500"
          }`}
        >
          {todo.completed
            ? "Completed"
            : "Pending"}
        </button>

        <button
          onClick={() =>
            router.push(
              `/edit-todo/${todo.id}`
            )
          }
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Edit
        </button>

        <button
          onClick={() =>
            handleDelete(todo.id)
          }
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
}