import express from "express";
import tutorController from "../controllers/tutorController.js";
import {
    tutorValidationRules,
    validate,
} from "../middlewares/tutorValidator.js";
import upload from "../../lib/multerConfig.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, tutorController.getAllTutor);
router.get("/:tutorId", authenticateToken, tutorController.getTutorById);
router.post(
    "/",
    authenticateToken,
    upload.single("avatar"),
    tutorValidationRules,
    validate,
    tutorController.createTutor,
);
router.patch(
    "/tutorId",
    authenticateToken,
    tutorValidationRules,
    validate,
    tutorController.updateTutor,
);
router.delete("/:tutorId", authenticateToken, tutorController.deleteTutor);

export default router;
