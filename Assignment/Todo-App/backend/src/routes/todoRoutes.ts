

import { Router, Request, Response, NextFunction } from "express";

import { protect } from "../middleware/authMiddleware";

import {
  create,
  getAll,
  update,
  remove,
  toggleStatus,
} from "../controllers/todoController";

const todoValidation = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next();
};

const router = Router();

router.use(protect);

router.get("/", getAll);

router.post(
  "/",
  todoValidation,
  create
);

router.put(
  "/:id",
  todoValidation,
  update
);

router.delete("/:id", remove);

router.patch(
  "/:id/status",
  toggleStatus
);

export default router;