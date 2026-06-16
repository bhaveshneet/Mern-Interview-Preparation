
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import {
    registerUser,
    loginUser,
} from "../services/authService.ts";

export const register = async (
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

        const { name, email, password } = req.body;

        const userId = await registerUser({
            name,
            email,
            password,
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId,
        });
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export const login = async (
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

        const { email, password } = req.body;

        const user = await loginUser({
            email,
            password,
        });

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "7d",
            }
        );

        return res.status(200).json({
            success: true,
            token,
        });
    } catch (error: any) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

export const logout = async (
    _req: Request,
    res: Response
) => {
    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};