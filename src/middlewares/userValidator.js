import { body, validationResult } from "express-validator";
export const userValidationRules = [
    body("name")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("email").isEmail().withMessage("Format email harus sesuai"),
    body("password")
        .isLength({ min: 3 })
        .withMessage("Password harus lebih dari 3"),
    body("phone")
        .isLength({ min: 11 })
        .withMessage("Nomor harus lebih dari 10"),
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
export default {
    userValidationRules,
    validate,
};
