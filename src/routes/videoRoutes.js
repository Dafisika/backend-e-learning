import express from "express";
import videoController from "../controllers/videoController.js";
import {
    videoValidationRules,
    validate,
} from "../middlewares/videoValidator.js";
import upload from "../../lib/multerConfig.js";

const router = express.Router();

router.get("/", videoController.getAllVideo);
router.get("/:videoId", videoController.getVideoById);
router.post(
    "/",
    upload.single("video"),
    videoValidationRules,
    validate,
    videoController.createVideo,
);
router.patch(
    "/:videoId",
    videoValidationRules,
    validate,
    videoController.updateVideo,
);
router.delete("/:videoId", videoController.deleteVideo);

export default router;
