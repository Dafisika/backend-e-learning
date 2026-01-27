import express from "express";
import quizItemController from "../controllers/quizItemController.js";
import {
    quizItemValidationRules,
    validate,
} from "../middlewares/quizItemValidator.js";

const router = express.Router();

router.get("/", quizItemController.getAllQuizItem);
router.get("/:quizItemId", quizItemController.getQuizItemById);
router.post(
    "/",
    quizItemValidationRules,
    validate,
    quizItemController.createQuizItem,
);
router.patch(
    "/:quizItemId",
    quizItemValidationRules,
    validate,
    quizItemController.updateQuizItem,
);
router.delete("/:quizItemId", quizItemController.deleteQuizItem);

export default router;
