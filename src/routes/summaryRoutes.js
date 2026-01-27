import express from "express";

import {
    summaryValidationRules,
    validate,
} from "../middlewares/summaryValidator.js";
import summaryController from "../controllers/summaryController.js";

const router = express.Router();

router.get("/", summaryController.getAllSummary);
router.get("/:summaryId", summaryController.getSummaryById);
router.post(
    "/",
    summaryValidationRules,
    validate,
    summaryController.createSummary,
);
router.patch(
    "/:summaryId",
    summaryValidationRules,
    validate,
    summaryController.updateSummary,
);
router.delete("/:summaryId", summaryController.deleteSummary);

export default router;
