"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import TodoItem from "@/components/TodoItem";
import Pagination from "@/components/Pagination";

interface Todo {
  id: number;
  task_name: string;
  description: string;
  priority: string;
  category: string;
  status: string;
  due_date: string;
  title: string;
  completed: boolean;
}

export default function TodosPage() {
  const router = useRouter();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const todosPerPage = 5;
  const API_URL = "http://localhost:5000/api/todos";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
        return;
      }
      const response = await fetch(API_URL, {
        headers: { Authorization: "Bearer " + token },
      });
      const result = await response.json();
      if (result.success) {
        setTodos(result.todos);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      const result = await response.json();
      if (result.success) {
        fetchTodos();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setCurrentPage(1);
  };

  const filteredTodos = todos.filter((todo) => {
    const search = searchTerm.toLowerCase();
    return (
      todo.task_name?.toLowerCase().includes(search) ||
      todo.description?.toLowerCase().includes(search) ||
      todo.priority?.toLowerCase().includes(search) ||
      todo.category?.toLowerCase().includes(search) ||
      todo.status?.toLowerCase().includes(search) ||
      new Date(todo.due_date).toLocaleDateString().toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      {/* Navbar */}
      <Navbar
        searchTerm={searchInput}
        setSearchTerm={setSearchInput}
        handleSearch={handleSearch}
      />

      {/* Page body */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 flex flex-col">

        {loading ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-gray-500 text-sm">Loading your todos...</p>
          </div>

        ) : filteredTodos.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-12 text-center">
            <p className="text-4xl mb-3">📋</p>
            <p className="text-gray-700 font-semibold text-lg">No Todos Found</p>
            <p className="text-gray-400 text-sm mt-1">
              {searchTerm ? "Try a different search term." : "Add your first todo!"}
            </p>
          </div>

        ) : (
          <>
            {/* Todo list — strictly 5 items, no scroll */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              {currentTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
              ))}
            </div>

            {/* Pagination always shown below list */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}

      </div>
    </div>
  );
}
