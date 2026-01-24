import express from "express";
import {
    classValidationRules,
    validate,
} from "../middlewares/classValidator.js";
import upload from "../../lib/multerConfig.js";
import classController from "../controllers/classController.js";

const router = express.Router();

router.get("/", classController.getAllClass);
router.get("/:classId", classController.getClassById);
router.post(
    "/",
    upload.single("image"),
    classValidationRules,
    validate,
    classController.createClass,
);
router.patch(
    "/:classId",
    classValidationRules,
    validate,
    classController.updateClass,
);
router.delete("/:classId", classController.deleteClass);

export default router;
