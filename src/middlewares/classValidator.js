import { body, validationResult } from "express-validator";

export const classValidationRules = [
    body("title")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("image").optional(),
    body("description")
        .isLength({ min: 5 })
        .withMessage("Harus lebih dari 5 karakter"),
    body("tutorId").isNumeric().isLength({ min: 1 }),
    body("categoryClassId").isNumeric().isLength({ min: 1 }),
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

export default { classValidationRules, validate };
