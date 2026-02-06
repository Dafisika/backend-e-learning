import express from "express";
import quizController from "../controllers/quizController.js";
import { quizValidationRules, validate } from "../middlewares/quizValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, quizController.getAllQuiz);
router.get("/:quizId", authenticateToken, quizController.getQuizById);
router.post(
    "/",
    authenticateToken,
    quizValidationRules,
    validate,
    quizController.createQuiz,
);
router.patch(
    "/:quizId",
    authenticateToken,
    quizValidationRules,
    validate,
    quizController.updateQuiz,
);
router.delete("/:quizId", authenticateToken, quizController.deleteQuiz);

export default router;
