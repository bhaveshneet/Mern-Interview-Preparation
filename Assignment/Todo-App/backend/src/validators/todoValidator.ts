

import { body } from "express-validator";

export const todoValidation = [
    body("title")
        .notEmpty()
        .withMessage("Title is required")
];