import express from "express";
import {
    categoryClassValidationRules,
    validate,
} from "../middlewares/categoryClassValidator.js";
import categoryClassController from "../controllers/categoryClassController.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, categoryClassController.getAllCategoryClass);
router.get(
    "/:categoryClassId",
    authenticateToken,
    categoryClassController.getCategoryClassById,
);
router.post(
    "/",
    authenticateToken,
    categoryClassValidationRules,
    validate,
    categoryClassController.createCategoryClass,
);
router.patch(
    "/:categoryClassId",
    authenticateToken,
    categoryClassValidationRules,
    validate,
    categoryClassController.updateCategoryClass,
);
router.delete("/:categoryClassId", categoryClassController.deleteCategoryClass);

export default router;
