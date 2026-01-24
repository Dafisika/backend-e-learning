import { body, validationResult } from "express-validator";

export const paymentValidationRules = [
    body("totalPayment").isNumeric().isLength({ min: 2 }),
    body("totalPrice").isNumeric().isLength({ min: 2 }),

    body("userId").custom(async (id) => {
        prisma.user.findUnique({ where: { id } });
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

export default { paymentValidationRules, validate };
