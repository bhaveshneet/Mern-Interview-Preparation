
import bcrypt from "bcrypt";
import pool from "../config/db";

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const { name, email, password } = data;

  // Email already exists का check
  const [existingUsers]: any = await pool.query(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (existingUsers.length > 0) {
    throw new Error("Email already registered");
  }

  // Password hash
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user
  const [result]: any = await pool.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return result.insertId;
};

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const { email, password } = data;

  // User find
  const [users]: any = await pool.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (users.length === 0) {
    throw new Error("Invalid email or password");
  }

  const user = users[0];

  // Password compare
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};