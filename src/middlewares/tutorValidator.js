import { body, validationResult } from "express-validator";

export const tutorValidationRules = [
    body("avatar").optional(),
    body("name")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("position")
        .isLength({ min: 3 })
        .withMessage("Jabatan harus lebih dari 3 karakter"),
    body("company")
        .isLength({ min: 5 })
        .withMessage("Harus lebih dari 5 karakter"),
    body("experience")
        .isLength({ min: 10 })
        .withMessage("Deskripsi pengalaman tidak boleh singkat"),
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

export default { tutorValidationRules, validate };
