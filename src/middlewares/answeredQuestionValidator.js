import { body, validationResult } from "express-validator";

export const answeredQuizValidationRules = [
    body("userId")
        .custom(async (id) => {
            await prisma.user.findUnique({ where: { id } });
        })
        .isNumeric()
        .isLength({ min: 1 }),
    body("optionQuizId")
        .custom(async (id) => {
            await prisma.Option_Quiz.findUnique({ where: { id } });
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

export default { answeredQuizValidationRules, validate };
