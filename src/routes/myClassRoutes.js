import express from "express";
import myClassController from "../controllers/myClassController.js";
import {
    validate,
    myClassValidationRules,
} from "../middlewares/myClassValidation.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, myClassController.getAllMyClass);
router.get("/:myClassId", authenticateToken, myClassController.getMyClassById);
router.post(
    "/",
    authenticateToken,
    myClassValidationRules,
    validate,
    myClassController.createMyClass,
);
router.patch(
    "/:myClassId",
    authenticateToken,
    myClassValidationRules,
    validate,
    myClassController.updateMyClass,
);
router.delete(
    "/:myClassId",
    authenticateToken,
    myClassController.deleteMyClass,
);

export default router;
