import { Request, Response } from "express";
import * as todoService from "../services/todoService";

export const getTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = (req as any).userId;

    const todos = await todoService.getTodos(userId);

    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.error("Get Todos Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch todos",
    });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = (req as any).userId;

    const todo = await todoService.getTodoById(
      Number(id),
      userId
    );

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.error("Get Todo By Id Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch todo",
    });
  }
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
    } = req.body;

    const userId = (req as any).userId;

    const todoId = await todoService.createTodo(
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
      userId
    );

    res.status(201).json({
      success: true,
      message: "Todo created successfully",
      todoId,
    });
  } catch (error) {
    console.error("Create Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create todo",
    });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const {
      task_name,
      description,
      priority,
      due_date,
      category,
      status,
    } = req.body;

    const userId = (req as any).userId;

    const affectedRows =
      await todoService.updateTodo(
        Number(id),
        task_name,
        description,
        priority,
        due_date,
        category,
        status,
        userId
      );

    if (affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.error("Update Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update todo",
    });
  }
};

export const updateTodoStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const userId = (req as any).userId;

    const affectedRows =
      await todoService.updateTodoStatus(
        Number(id),
        status,
        userId
      );

    if (affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Update Status Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update status",
    });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const userId = (req as any).userId;

    const affectedRows =
      await todoService.deleteTodo(
        Number(id),
        userId
      );

    if (affectedRows === 0) {
      res.status(404).json({
        success: false,
        message: "Todo not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error("Delete Todo Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete todo",
    });
  }
};