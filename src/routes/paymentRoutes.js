import express from "express";
import paymentController from "../controllers/paymentController.js";
import {
    paymentValidationRules,
    validate,
} from "../middlewares/paymentValidator.js";

const router = express.Router();

router.get("/", paymentController.getAllPayment);
router.get("/:paymentId", paymentController.getPaymentById);
router.post(
    "/",
    paymentValidationRules,
    validate,
    paymentController.createPayment,
);
router.patch(
    "/:paymentId",
    paymentValidationRules,
    validate,
    paymentController.updatePayment,
);
router.delete("/:paymentId", paymentController.deletePayment);

export default router;
