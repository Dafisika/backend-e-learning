import { body, validationResult } from "express-validator";

export const summaryValidationRules = [
    body("title")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("content")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),

    body("moduleId").custom(async (id) => {
        prisma.module.findUnique({ where: { id } });
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

export default { summaryValidationRules, validate };
