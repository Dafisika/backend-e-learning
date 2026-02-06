import { body, validationResult } from "express-validator";
export const loginValidationRoutes = [
    body("email").isEmail().withMessage("Format email harus sesuai"),
    body("password")
        .isLength({ min: 3 })
        .withMessage("Password harus lebih dari 3"),
];
export const registerValidationRoutes = [
    body("name").isString().withMessage("Nama harus berupa karakter"),
    body("email").isEmail().withMessage("Format email harus sesuai"),
    body("phone").isLength({ max: 13 }).withMessage("Nomor melebihi batas"),
    body("password")
        .isLength({ min: 3 })
        .withMessage("Password harus lebih dari 3"),
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
    loginValidationRoutes,
    registerValidationRoutes,
    validate,
};
