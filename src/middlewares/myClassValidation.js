import { body, validationResult } from "express-validator";

export const myClassValidationRules = [
    body("status").isBoolean(),
    body("progress").isNumeric().isLength({ min: 3 }),
    body("totalModule").isNumeric().isLength({ min: 3 }),
    body("totalTime").isNumeric().isLength({ min: 3 }),

    body("classId").custom(async (id) => {
        prisma.class.findUnique({ where: { id } });
    }),
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

export default { myClassValidationRules, validate };
