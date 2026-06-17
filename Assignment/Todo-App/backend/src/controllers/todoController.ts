
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  toggleTodoStatus,
} from "../services/todoService";

export const create = async (
  req: Request,
  res: Response
) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { title, description } = req.body;

    const todoId = await createTodo(
      title,
      description || "",
      (req as any).userId
    );

    return res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todoId,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAll = async (
  req: Request,
  res: Response
) => {
  try {
    const todos = await getTodos((req as any).userId);

    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const update = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const affectedRows = await updateTodo(
      Number(id),
      title,
      description,
      (req as any).userId
    );

    if (affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const remove = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const affectedRows = await deleteTodo(
      Number(id),
      (req as any).userId
    );

    if (affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const toggleStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const affectedRows = await toggleTodoStatus(
      Number(id),
      (req as any).userId
    );

    if (affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo status updated",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};