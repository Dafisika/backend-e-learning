import { body, validationResult } from "express-validator";

export const videoValidationRules = [
    body("name")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("video_url")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("description")
        .isLength({ min: 2 })
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

export default { videoValidationRules, validate };
