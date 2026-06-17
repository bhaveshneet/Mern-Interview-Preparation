import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import todoRoutes from "./routes/todoRoutes";
import { errorHandler } from "./middleware/errorMiddleware";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Todo API is running...",
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Error Middleware
app.use(errorHandler);

export default app;