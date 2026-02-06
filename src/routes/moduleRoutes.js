import express from "express";
import moduleController from "../controllers/moduleController.js";
import {
    moduleValidationRules,
    validate,
} from "../middlewares/moduleValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, moduleController.getAllModule);
router.get("/:moduleId", authenticateToken, moduleController.getModuleById);
router.post(
    "/",
    authenticateToken,
    moduleValidationRules,
    validate,
    moduleController.createModule,
);
router.patch(
    "/:moduleId",
    authenticateToken,
    moduleValidationRules,
    validate,
    moduleController.updateModule,
);
router.delete("/:moduleId", authenticateToken, moduleController.deleteModule);

export default router;
