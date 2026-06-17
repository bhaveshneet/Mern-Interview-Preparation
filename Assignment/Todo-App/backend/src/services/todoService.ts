

import pool from "../config/db";

export const createTodo = async (
  title: string,
  description: string,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    INSERT INTO todos (title, description, user_id)
    VALUES (?, ?, ?)
    `,
    [title, description, userId]
  );

  return result.insertId;
};

export const getTodos = async (userId: number) => {
  const [todos]: any = await pool.query(
    `
    SELECT
      id,
      title,
      description,
      completed,
      created_at
    FROM todos
    WHERE user_id = ?
    ORDER BY created_at DESC
    `,
    [userId]
  );

  return todos;
};

export const updateTodo = async (
  id: number,
  title: string,
  description: string,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    UPDATE todos
    SET title = ?, description = ?
    WHERE id = ? AND user_id = ?
    `,
    [title, description, id, userId]
  );

  return result.affectedRows;
};

export const deleteTodo = async (
  id: number,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    DELETE FROM todos
    WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  return result.affectedRows;
};

export const toggleTodoStatus = async (
  id: number,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    UPDATE todos
    SET completed = NOT completed
    WHERE id = ? AND user_id = ?
    `,
    [id, userId]
  );

  return result.affectedRows;
};