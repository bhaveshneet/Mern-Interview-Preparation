"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: number;
}

export default function TodosPage() {
  const router = useRouter();

  const [todos, setTodos] = useState<Todo[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] =
    useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          TODO LIST
        </h1>

      </div>
    </div>
  );
}