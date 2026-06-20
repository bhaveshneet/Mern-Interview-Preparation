"use client";

import { useEffect, useState } from "react";
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

  const [loading, setLoading] =
    useState(true);

  const API_URL =
    "http://localhost:5000/api/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        API_URL,
        {
          headers: {
            Authorization:
              "Bearer " + token,
          },
        }
      );

      const result =
        await response.json();

      if (result.success) {
        setTodos(result.todos);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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