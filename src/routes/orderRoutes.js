import express from "express";
import orderController from "../controllers/orderController.js";
import {
    orderValidationRules,
    validate,
} from "../middlewares/orderValidator.js";

const router = express.Router();

router.get("/", orderController.getAllOrder);
router.get("/:orderId", orderController.getOrderById);
router.post("/", orderValidationRules, validate, orderController.createOrder);
router.patch(
    "/:orderId",
    orderValidationRules,
    validate,
    orderController.updateOrder,
);
router.delete("/:orderId", orderController.deleteOrder);

export default router;
