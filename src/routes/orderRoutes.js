import express from "express";
import orderController from "../controllers/orderController.js";
import {
    orderValidationRules,
    validate,
} from "../middlewares/orderValidator.js";
import { authenticateToken } from "../middlewares/auth/authenticateToken.js";

const router = express.Router();

router.get("/", authenticateToken, orderController.getAllOrder);
router.get("/:orderId", authenticateToken, orderController.getOrderById);
router.post(
    "/",
    authenticateToken,
    orderValidationRules,
    validate,
    orderController.createOrder,
);
router.patch(
    "/:orderId",
    authenticateToken,
    orderValidationRules,
    validate,
    orderController.updateOrder,
);
router.delete("/:orderId", authenticateToken, orderController.deleteOrder);

export default router;
