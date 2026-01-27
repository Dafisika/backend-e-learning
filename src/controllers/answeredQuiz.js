import prisma from "../../lib/prismaClient.js";

export const getAllAnsweredQuiz = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const answeredQuiz = await prisma.answered_Quiz.findMany();

        if (!answeredQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Answered Quiz tidak ditemukan",
                data: answeredQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Answered Quiz ditemukan",
            data: answeredQuiz,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: answeredQuiz,
        });
    }
};

export const getAnsweredQuizById = async (req, res) => {
    try {
        const id = req.params.answeredQuizId;
        console.log("endpoint terpanggil");

        const answeredQuiz = await prisma.answered_Quiz.findUnique({
            where: { id },
        });

        if (!answeredQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Answered Quiz tidak ditemukan",
                data: answeredQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Answered Quiz ditemukan",
            data: answeredQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createAnsweredQuiz = async (req, res) => {
    try {
        const { userId, optionQuizId } = req.body;

        const answeredQuiz = await prisma.answered_Quiz.create({
            data: { userId, optionQuizId },
        });

        if (!answeredQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Answered Quiz tidak ditemukan",
                data: answeredQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Answered Quiz ditambahkan",
            data: answeredQuiz,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateAnsweredQuiz = async (req, res) => {
    try {
        const id = req.params.answeredQuizId;
        const { userId, optionQuizId } = req.body;
        console.log("endpoint terpanggil");

        const answeredQuiz = await prisma.answered_Quiz.update({
            where: { id },
            data: { userId, optionQuizId },
        });

        if (!answeredQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Answered Quiz tidak ditemukan",
                data: answeredQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Answered Quiz diperbaharui",
            data: answeredQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteAnsweredQuiz = async (req, res) => {
    try {
        const id = req.params.answeredQuizId;
        console.log("endpoint terpanggil");

        const answeredQuiz = await prisma.answered_Quiz.delete({
            where: { id },
        });

        if (!answeredQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: answeredQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Answered Quiz dihapus",
            data: answeredQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllAnsweredQuiz,
    getAnsweredQuizById,
    createAnsweredQuiz,
    updateAnsweredQuiz,
    deleteAnsweredQuiz,
};
