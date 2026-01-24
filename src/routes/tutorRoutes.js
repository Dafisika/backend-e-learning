import express from "express";
import tutorController from "../controllers/tutorController.js";
import {
    tutorValidationRules,
    validate,
} from "../middlewares/tutorValidator.js";
import upload from "../../lib/multerConfig.js";

const router = express.Router();

router.get("/", tutorController.getAllTutor);
router.get("/:tutorId", tutorController.getTutorById);
router.post(
    "/",
    upload.single("avatar"),
    tutorValidationRules,
    validate,
    tutorController.createTutor,
);
router.patch(
    "/tutorId",
    tutorValidationRules,
    validate,
    tutorController.updateTutor,
);
router.delete("/:tutorId", tutorController.deleteTutor);

export default router;
