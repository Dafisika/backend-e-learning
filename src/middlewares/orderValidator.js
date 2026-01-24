import { body, validationResult } from "express-validator";

export const orderValidationRules = [
    body("price").isNumeric().isLength({ min: 2 }),

    body("classId").custom(async (id) => {
        prisma.class.findUnique({ where: { id } });
    }),
    body("paymentId").custom(async (id) => {
        prisma.payment.findUnique({ where: { id } });
    }),
];

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({
        status: "error",
        errors: errors.array().map((err) => ({
            field: err.path,
            message: err.msg,
        })),
    });
};

export default { orderValidationRules, validate };
