import prisma from "../../lib/prismaClient.js";

export const getAllQuiz = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const quiz = await prisma.quiz.findMany();

        if (!quiz) {
            return res.status(404).json({
                code: 404,
                message: "Data quiz tidak ditemukan",
                data: quiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data quiz ditemukan",
            data: quiz,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: quiz,
        });
    }
};

export const getQuizById = async (req, res) => {
    try {
        const id = req.params.quizId;
        console.log("endpoint terpanggil");

        const quiz = await prisma.quiz.findUnique({
            where: { id },
        });

        if (!quiz) {
            return res.status(404).json({
                code: 404,
                message: "Data quiz tidak ditemukan",
                data: quiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data quiz ditemukan",
            data: quiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createQuiz = async (req, res) => {
    try {
        const { name, type, moduleId } = req.body;

        const quiz = await prisma.quiz.create({
            data: { name, type, moduleId },
        });

        if (!quiz) {
            return res.status(404).json({
                code: 404,
                message: "Data quiz tidak ditemukan",
                data: quiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data quiz ditambahkan",
            data: quiz,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateQuiz = async (req, res) => {
    try {
        const id = req.params.quizId;
        const { name, type, moduleId } = req.body;
        console.log("endpoint terpanggil");

        const quiz = await prisma.quiz.update({
            where: { id },
            data: { name, type, moduleId },
        });

        if (!quiz) {
            return res.status(404).json({
                code: 404,
                message: "Data quiz tidak ditemukan",
                data: quiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data quiz diperbaharui",
            data: quiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteQuiz = async (req, res) => {
    try {
        const id = req.params.quizId;
        console.log("endpoint terpanggil");

        const quiz = await prisma.quiz.delete({
            where: { id },
        });

        if (!quiz) {
            return res.status(404).json({
                code: 404,
                message: "Data quiz tidak ditemukan",
                data: quiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data quiz dihapus",
            data: quiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default { getAllQuiz, getQuizById, createQuiz, updateQuiz, deleteQuiz };
