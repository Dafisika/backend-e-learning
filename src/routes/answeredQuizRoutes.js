import express from "express";
import answeredQuizController from "../controllers/answeredQuizController.js";
import {
    answeredQuizValidationRules,
    validate,
} from "../middlewares/answeredQuizValidator.js";

const router = express.Router();

router.get("/", answeredQuizController.getAllAnsweredQuiz);
router.get("/:answeredQuizId", answeredQuizController.getAnsweredQuizById);
router.post(
    "/",
    answeredQuizValidationRules,
    validate,
    answeredQuizController.createAnsweredQuiz,
);
router.patch(
    "/:answeredQuizId",
    answeredQuizValidationRules,
    validate,
    answeredQuizController.updateAnsweredQuiz,
);
router.delete("/:answeredQuizId", answeredQuizController.deleteAnsweredQuiz);

export default router;
