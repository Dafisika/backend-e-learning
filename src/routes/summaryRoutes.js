import express from "express";

import {
    summaryValidationRules,
    validate,
} from "../middlewares/summaryValidator.js";
import summaryController from "../controllers/summaryController.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, summaryController.getAllSummary);
router.get("/:summaryId", authenticateToken, summaryController.getSummaryById);
router.post(
    "/",
    authenticateToken,
    summaryValidationRules,
    validate,
    summaryController.createSummary,
);
router.patch(
    "/:summaryId",
    authenticateToken,
    summaryValidationRules,
    validate,
    summaryController.updateSummary,
);
router.delete(
    "/:summaryId",
    authenticateToken,
    summaryController.deleteSummary,
);

export default router;
