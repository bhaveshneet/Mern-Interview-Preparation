"use client";

import { Todo } from "@/types/todo";
import { useRouter } from "next/navigation";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface Props {
  todo: Todo;
  handleDelete: (id: number) => void;
}

export default function TodoItem({ todo, handleDelete }: Props) {
  const router = useRouter();

  const formattedPriority =
    todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1).toLowerCase();

  const formattedStatus = todo.status
    .split(/[-\s]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between gap-4">

        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-[#0f2347] leading-snug mb-0.5">
            {todo.task_name}
          </h2>

          {todo.description && (
            <p className="text-gray-500 text-sm mb-2">{todo.description}</p>
          )}

          {/* Meta — all black/gray, no colors */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm mt-1">
            <div>
              <span className="font-bold text-gray-800">Priority: </span>
              <span className="text-gray-700">{formattedPriority}</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Category: </span>
              <span className="text-gray-700">{todo.category}</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Status: </span>
              <span className="text-gray-700">{formattedStatus}</span>
            </div>
            <div>
              <span className="font-bold text-gray-800">Due: </span>
              <span className="text-gray-700">
                {new Date(todo.due_date).toLocaleDateString("en-US", {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — Edit / Delete */}
        <div className="flex items-center gap-4 shrink-0 pt-1">
          <button
            onClick={() => router.push(`/edit-todo/${todo.id}`)}
            className="flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:text-blue-800 transition"
          >
            <FaEdit size={16} />
            Edit
          </button>
          <button
            onClick={() => handleDelete(todo.id!)}
            className="flex items-center gap-1.5 text-red-600 font-bold text-sm hover:text-red-800 transition"
          >
            <FaTrashAlt size={16} />
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
