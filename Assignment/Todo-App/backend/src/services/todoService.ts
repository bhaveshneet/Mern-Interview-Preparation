import pool from "../config/db";

export const createTodo = async (
  task_name: string,
  description: string,
  priority: string,
  due_date: string,
  category: string,
  status: string,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    INSERT INTO todos
    (
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
      user_id
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
      userId,
    ]
  );

  return result.insertId;
};

export const getTodos = async (userId: number) => {
  const [todos]: any = await pool.query(
    `
    SELECT
      id,
      task_name,
      description,
      status,
      priority,
      due_date,
      category,
      created_at
    FROM todos
    WHERE user_id = ?
    ORDER BY created_at DESC
    `,
    [userId]
  );

  return todos;
};

export const getTodoById = async (
  id: number,
  userId: number
) => {
  const [rows]: any = await pool.query(
    `
    SELECT
      id,
      task_name,
      description,
      status,
      priority,
      due_date,
      category,
      created_at
    FROM todos
    WHERE id = ?
    AND user_id = ?
    `,
    [id, userId]
  );

  return rows[0];
};

export const updateTodo = async (
  id: number,
  task_name: string,
  description: string,
  priority: string,
  due_date: string,
  category: string,
  status: string,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    UPDATE todos
    SET
      task_name = ?,
      description = ?,
      priority = ?,
      due_date = ?,
      category = ?,
      status = ?
    WHERE id = ?
    AND user_id = ?
    `,
    [
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
      id,
      userId,
    ]
  );

  return result.affectedRows;
};

export const updateTodoStatus = async (
  id: number,
  status: string,
  userId: number
) => {
  const [result]: any = await pool.query(
    `
    UPDATE todos
    SET status = ?
    WHERE id = ?
    AND user_id = ?
    `,
    [status, id, userId]
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
    WHERE id = ?
    AND user_id = ?
    `,
    [id, userId]
  );

  return result.affectedRows;
};