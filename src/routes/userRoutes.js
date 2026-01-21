import express from "express";
import { userValidationRules, validate } from "../middlewares/userValidator.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userValidationRules, validate, userController.createUser);
export default router;
