import express from "express";
import optionQuizController from "../controllers/optionQuizController.js";
import {
    optionQuizValidationRules,
    validate,
} from "../middlewares/optionQuizValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, optionQuizController.getAllOptionQuiz);
router.get(
    "/:optionQuizId",
    authenticateToken,
    optionQuizController.getOptionQuizById,
);
router.post(
    "/",
    authenticateToken,
    optionQuizValidationRules,
    validate,
    optionQuizController.createOptionQuiz,
);
router.patch(
    "/:optionQuizId",
    authenticateToken,
    optionQuizValidationRules,
    validate,
    optionQuizController.updateOptionQuiz,
);
router.delete(
    "/:optionQuizId",
    authenticateToken,
    optionQuizController.deleteOptionQuiz,
);

export default router;
