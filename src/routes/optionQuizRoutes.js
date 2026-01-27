import express from "express";
import optionQuizController from "../controllers/optionQuizController.js";
import {
    optionQuizValidationRules,
    validate,
} from "../middlewares/optionQuizValidator.js";

const router = express.Router();

router.get("/", optionQuizController.getAllOptionQuiz);
router.get("/:optionQuizId", optionQuizController.getOptionQuizById);
router.post(
    "/",
    optionQuizValidationRules,
    validate,
    optionQuizController.createOptionQuiz,
);
router.patch(
    "/:optionQuizId",
    optionQuizValidationRules,
    validate,
    optionQuizController.updateOptionQuiz,
);
router.delete("/:optionQuizId", optionQuizController.deleteOptionQuiz);

export default router;
