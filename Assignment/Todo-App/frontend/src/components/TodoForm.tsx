
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    task_name: "",
    category: "",
    priority: "",
    status: "",
    dueDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      task_name: "",
      category: "",
      priority: "",
      status: "",
      dueDate: "",
      description: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.task_name.trim() ||
      !formData.category ||
      !formData.priority ||
      !formData.status ||
      !formData.dueDate ||
      !formData.description.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        router.push("/login");
        return;
      }

      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          task_name: formData.task_name,   // ✅ matches DB column
          description: formData.description,
          category: formData.category,
          priority: formData.priority,
          status: formData.status,
          due_date: formData.dueDate,      // ✅ matches DB column
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to add todo");
        return;
      }

      alert("Todo Added Successfully ✅");
      handleClear();
      router.push("/todos");

    } catch (error) {
      console.error(error);
      alert("Server Error — check console");
    }
  };

  const fieldClass =
    "w-full px-3 py-2.5 text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition";

  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-5 text-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">Todo Form</h1>
        </div>

        <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-6 flex flex-col gap-4">

          {/* Task Name + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label htmlFor="task_name" className={labelClass}>
                Task Name <span className="text-red-500">*</span>
              </label>
              <input
                id="task_name"
                type="text"
                name="task_name"
                value={formData.task_name}
                onChange={handleChange}
                placeholder="Enter task name"
                className={fieldClass}
                required
              />
            </div>
            <div>
              <label htmlFor="category" className={labelClass}>
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={fieldClass}
                required
              >
                <option value="">Select</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Study">Study</option>
              </select>
            </div>
          </div>

          {/* Priority + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="priority" className={labelClass}>
                Priority <span className="text-red-500">*</span>
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className={fieldClass}
                required
              >
                <option value="">Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className={labelClass}>
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className={fieldClass}
                required
              >
                <option value="">Select</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="dueDate" className={labelClass}>
              Due Date <span className="text-red-500">*</span>
            </label>
            <input
              id="dueDate"
              type="datetime-local"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={fieldClass}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className={labelClass}>
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description..."
              rows={3}
              className={`${fieldClass} resize-none`}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={handleClear}
              className="px-7 py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 active:scale-95 transition cursor-pointer"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 active:scale-95 shadow-md shadow-indigo-200 transition cursor-pointer"
            >
              Add Todo
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

