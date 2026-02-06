import express from "express";
import answeredQuizController from "../controllers/answeredQuizController.js";
import {
    answeredQuizValidationRules,
    validate,
} from "../middlewares/answeredQuizValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, answeredQuizController.getAllAnsweredQuiz);
router.get(
    "/:answeredQuizId",
    authenticateToken,
    answeredQuizController.getAnsweredQuizById,
);
router.post(
    "/",
    authenticateToken,
    answeredQuizValidationRules,
    validate,
    answeredQuizController.createAnsweredQuiz,
);
router.patch(
    "/:answeredQuizId",
    authenticateToken,
    answeredQuizValidationRules,
    validate,
    answeredQuizController.updateAnsweredQuiz,
);
router.delete(
    "/:answeredQuizId",
    authenticateToken,
    answeredQuizController.deleteAnsweredQuiz,
);

export default router;
