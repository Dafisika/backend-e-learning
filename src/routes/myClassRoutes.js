import express from "express";
import myClassController from "../controllers/myClassController.js";
import {
    validate,
    myClassValidationRules,
} from "../middlewares/myClassValidation.js";

const router = express.Router();

router.get("/", myClassController.getAllMyClass);
router.get("/:myClassId", myClassController.getMyClassById);
router.post(
    "/",
    myClassValidationRules,
    validate,
    myClassController.createMyClass,
);
router.patch(
    "/:myClassId",
    myClassValidationRules,
    validate,
    myClassController.updateMyClass,
);
router.delete("/:myClassId", myClassController.deleteMyClass);

export default router;
