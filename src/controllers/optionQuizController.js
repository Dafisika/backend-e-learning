import prisma from "../../lib/prismaClient.js";

export const getAllOptionQuiz = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const optionQuiz = await prisma.option_Quiz.findMany();

        if (!optionQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Option Quiz tidak ditemukan",
                data: optionQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Option Quiz ditemukan",
            data: optionQuiz,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: optionQuiz,
        });
    }
};

export const getOptionQuizById = async (req, res) => {
    try {
        const id = req.params.optionQuizId;
        console.log("endpoint terpanggil");

        const optionQuiz = await prisma.option_Quiz.findUnique({
            where: { id },
        });

        if (!optionQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Option Quiz tidak ditemukan",
                data: optionQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Option Quiz ditemukan",
            data: optionQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createOptionQuiz = async (req, res) => {
    try {
        const { isCorrect, quizItemId } = req.body;

        const optionQuiz = await prisma.option_Quiz.create({
            data: { isCorrect, quizItemId },
        });

        if (!optionQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Option Quiz  tidak ditemukan",
                data: optionQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Option Quiz ditambahkan",
            data: optionQuiz,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateOptionQuiz = async (req, res) => {
    try {
        const id = req.params.optionQuizId;
        const { isCorrect, quizItemId } = req.body;
        console.log("endpoint terpanggil");

        const optionQuiz = await prisma.option_Quiz.update({
            where: { id },
            data: { isCorrect, quizItemId },
        });

        if (!optionQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Option Quiz tidak ditemukan",
                data: optionQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Option Quiz diperbaharui",
            data: optionQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteOptionQuiz = async (req, res) => {
    try {
        const id = req.params.optionQuizId;
        console.log("endpoint terpanggil");

        const optionQuiz = await prisma.option_Quiz.delete({
            where: { id },
        });

        if (!optionQuiz) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: optionQuiz,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Option Quiz dihapus",
            data: optionQuiz,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllOptionQuiz,
    getOptionQuizById,
    createOptionQuiz,
    updateOptionQuiz,
    deleteOptionQuiz,
};
