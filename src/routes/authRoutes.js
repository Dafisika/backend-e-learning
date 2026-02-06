import express from "express";
import {
    loginValidationRoutes,
    registerValidationRoutes,
    validate,
} from "../middlewares/authValidator.js";
import authController from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.post("/login", loginValidationRoutes, validate, authController.login);
router.post(
    "/register",
    registerValidationRoutes,
    validate,
    authController.register,
);
router.post("/verify/:token", authController.verifiedEmail);
export default router;
