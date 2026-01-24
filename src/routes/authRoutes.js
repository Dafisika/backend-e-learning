import express from "express";
import {
    authValidationRoutes,
    validate,
} from "../middlewares/authValidator.js";
import authController from "../controllers/authController.js";

const router = express.Router();

router.post("/login", authValidationRoutes, validate, authController.login);
export default router;
