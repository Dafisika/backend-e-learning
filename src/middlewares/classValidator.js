import { body, validationResult } from "express-validator";
import prisma from "../../lib/prismaClient.js";

export const classValidationRules = [
    body("title")
        .isLength({ min: 3 })
        .withMessage("Nama harus lebih dari 3 karakter"),
    body("image").optional(),
    body("description")
        .isLength({ min: 5 })
        .withMessage("Harus lebih dari 5 karakter"),

    body("tutorId")
        .custom(async (id) => {
            await prisma.tutor.findUnique({ where: { id } });
        })
        .isNumeric()
        .isLength({ min: 1 }),
    body("categoryClassId")
        .custom(async (id) => {
            await prisma.category_Class.findUnique({ where: { id } });
        })
        .isNumeric()
        .isLength({ min: 1 }),
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
