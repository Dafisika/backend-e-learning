import { body, validationResult } from "express-validator";
import prisma from "../../lib/prismaClient.js";

export const moduleValidationRules = [
    body("name")
        .isLength({ min: 3 })
        .withMessage("Harus lebih dari 3 karakter"),
    body("type").isIn(["video", "summary", "quiz"]),
    body("note")
        .isLength({ min: 3 })
        .withMessage("Harus lebih dari 3 karakter"),
    body("number").isNumeric(),

    body("classId")
        .custom(async (id) => {
            await prisma.class.findUnique({ where: { id } });
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

export default { moduleValidationRules, validate };
