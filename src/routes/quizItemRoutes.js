import express from "express";
import quizItemController from "../controllers/quizItemController.js";
import {
    quizItemValidationRules,
    validate,
} from "../middlewares/quizItemValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, quizItemController.getAllQuizItem);
router.get(
    "/:quizItemId",
    authenticateToken,
    quizItemController.getQuizItemById,
);
router.post(
    "/",
    authenticateToken,
    quizItemValidationRules,
    validate,
    quizItemController.createQuizItem,
);
router.patch(
    "/:quizItemId",
    authenticateToken,
    quizItemValidationRules,
    validate,
    quizItemController.updateQuizItem,
);
router.delete(
    "/:quizItemId",
    authenticateToken,
    quizItemController.deleteQuizItem,
);

export default router;
