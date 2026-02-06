import express from "express";
import videoController from "../controllers/videoController.js";
import {
    videoValidationRules,
    validate,
} from "../middlewares/videoValidator.js";
import upload from "../../lib/multerConfig.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, videoController.getAllVideo);
router.get("/:videoId", authenticateToken, videoController.getVideoById);
router.post(
    "/",
    authenticateToken,
    upload.single("video"),
    videoValidationRules,
    validate,
    videoController.createVideo,
);
router.patch(
    "/:videoId",
    authenticateToken,
    videoValidationRules,
    validate,
    videoController.updateVideo,
);
router.delete("/:videoId", authenticateToken, videoController.deleteVideo);

export default router;
