import express from "express";
import {
    classValidationRules,
    validate,
} from "../middlewares/classValidator.js";
import upload from "../../lib/multerConfig.js";
import classController from "../controllers/classController.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, classController.getAllClass);
router.get("/:classId", authenticateToken, classController.getClassById);
router.post(
    "/",
    authenticateToken,
    upload.single("image"),
    classValidationRules,
    validate,
    classController.createClass,
);
router.patch(
    "/:classId",
    authenticateToken,
    classValidationRules,
    validate,
    classController.updateClass,
);
router.delete("/:classId", authenticateToken, classController.deleteClass);

export default router;
