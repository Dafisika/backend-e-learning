import express from "express";
import { userValidationRules, validate } from "../middlewares/userValidator.js";
import userController from "../controllers/userController.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, userController.getAllUsers);
router.get("/:userId", authenticateToken, userController.getUserById);
router.post(
    "/",
    authenticateToken,
    userValidationRules,
    validate,
    userController.createUser,
);
router.patch(
    "/:userId",
    authenticateToken,
    userValidationRules,
    validate,
    userController.updateUser,
);
router.delete("/:userId", authenticateToken, userController.deleteUser);

export default router;
