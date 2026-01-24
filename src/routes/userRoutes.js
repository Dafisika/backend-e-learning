import express from "express";
import { userValidationRules, validate } from "../middlewares/userValidator.js";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getUserById);
router.post("/", userValidationRules, validate, userController.createUser);
router.patch(
    "/:userId",
    userValidationRules,
    validate,
    userController.updateUser,
);
router.delete("/:userId", userController.deleteUser);

export default router;
