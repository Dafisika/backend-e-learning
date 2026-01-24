import express from "express";
import moduleController from "../controllers/moduleController.js";
import {
    moduleValidationRules,
    validate,
} from "../middlewares/moduleValidator.js";

const router = express.Router();

router.get("/", moduleController.getAllModule);
router.get("/:moduleId", moduleController.getModuleById);
router.post(
    "/",
    moduleValidationRules,
    validate,
    moduleController.createModule,
);
router.patch(
    "/:moduleId",
    moduleValidationRules,
    validate,
    moduleController.updateModule,
);
router.delete("/:moduleId", moduleController.deleteModule);

export default router;
