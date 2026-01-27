import express from "express";
import quizController from "../controllers/quizController.js";
import { quizValidationRules, validate } from "../middlewares/quizValidator.js";

const router = express.Router();

router.get("/", quizController.getAllQuiz);
router.get("/:quizId", quizController.getQuizById);
router.post("/", quizValidationRules, validate, quizController.createQuiz);
router.patch(
    "/:quizId",
    quizValidationRules,
    validate,
    quizController.updateQuiz,
);
router.delete("/:quizId", quizController.deleteQuiz);

export default router;
