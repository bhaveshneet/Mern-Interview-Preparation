import { Router } from "express";

import {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoStatus,
} from "../controllers/todoController";

import { protect } from "../middleware/authMiddleware";

const router = Router();

router.get(
  "/",
  protect,
  getTodos
);

router.get(
  "/:id",
  protect,
  getTodoById
);

router.post(
  "/",
  protect,
  createTodo
);

router.put(
  "/:id",
  protect,
  updateTodo
);

router.delete(
  "/:id",
  protect,
  deleteTodo
);

router.patch(
  "/:id/status",
  protect,
  updateTodoStatus
);

export default router;