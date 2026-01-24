import express from "express";
import {
    categoryClassValidationRules,
    validate,
} from "../middlewares/categoryClassValidator.js";
import categoryClassController from "../controllers/categoryClassController.js";

const router = express.Router();

router.get("/", categoryClassController.getAllCategoryClass);
router.get("/:categoryClassId", categoryClassController.getCategoryClassById);
router.post(
    "/",
    categoryClassValidationRules,
    validate,
    categoryClassController.createCategoryClass,
);
router.patch(
    "/:categoryClassId",
    categoryClassValidationRules,
    validate,
    categoryClassController.updateCategoryClass,
);
router.delete("/:categoryClassId", categoryClassController.deleteCategoryClass);

export default router;
