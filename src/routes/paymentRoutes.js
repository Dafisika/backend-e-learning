import express from "express";
import paymentController from "../controllers/paymentController.js";
import {
    paymentValidationRules,
    validate,
} from "../middlewares/paymentValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, paymentController.getAllPayment);
router.get("/:paymentId", authenticateToken, paymentController.getPaymentById);
router.post(
    "/",
    authenticateToken,
    paymentValidationRules,
    validate,
    paymentController.createPayment,
);
router.patch(
    "/:paymentId",
    authenticateToken,
    paymentValidationRules,
    validate,
    paymentController.updatePayment,
);
router.delete(
    "/:paymentId",
    authenticateToken,
    paymentController.deletePayment,
);

export default router;
