
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodoPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [error, setError] =
    useState("");

  const API_URL =
    "http://localhost:5000/api/todos";

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !description.trim()
    ) {
      setError(
        "Title and Description are required"
      );
      return;
    }

    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
            Authorization:
              "Bearer " + token,
          },
          body: JSON.stringify({
            title,
            description,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        alert(
          "Todo Added Successfully"
        );

        router.push("/todos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[700px]"
      >
        <h1 className="text-5xl font-bold text-center mb-8">
          Add Todo
        </h1>

        {error && (
          <p className="text-red-600 mb-4 text-center font-semibold">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(
              e.target.value
            );
            setError("");
          }}
          required
          className="w-full border rounded-lg px-5 py-4 text-xl mb-5"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(
              e.target.value
            );
            setError("");
          }}
          required
          rows={5}
          className="w-full border rounded-lg px-5 py-4 text-xl mb-5"
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl py-4 rounded-lg"
        >
          Add Todo
        </button>
      </form>

    </div>
  );
}