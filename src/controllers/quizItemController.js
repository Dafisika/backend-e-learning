import prisma from "../../lib/prismaClient.js";

export const getAllQuizItem = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const quizItem = await prisma.quiz_Item.findMany();

        if (!quizItem) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: quizItem,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Quiz Item ditemukan",
            data: quizItem,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: quizItem,
        });
    }
};

export const getQuizItemById = async (req, res) => {
    try {
        const id = req.params.quizItemId;
        console.log("endpoint terpanggil");

        const quizItem = await prisma.quiz_Item.findUnique({
            where: { id },
        });

        if (!quizItem) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: quizItem,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Quiz Item ditemukan",
            data: quizItem,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createQuizItem = async (req, res) => {
    try {
        const { question, quizId } = req.body;

        const quizItem = await prisma.quiz_Item.create({
            data: { question, quizId },
        });

        if (!quizItem) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: quizItem,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Quiz Item ditambahkan",
            data: quizItem,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateQuizItem = async (req, res) => {
    try {
        const id = req.params.quizItemId;
        const { question, quizId } = req.body;
        console.log("endpoint terpanggil");

        const quizItem = await prisma.quiz_Item.update({
            where: { id },
            data: { question, quizId },
        });

        if (!quizItem) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: quizItem,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Quiz Item diperbaharui",
            data: quizItem,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteQuizItem = async (req, res) => {
    try {
        const id = req.params.quizItemId;
        console.log("endpoint terpanggil");

        const quizItem = await prisma.quiz_Item.delete({
            where: { id },
        });

        if (!quizItem) {
            return res.status(404).json({
                code: 404,
                message: "Data Quiz Item tidak ditemukan",
                data: quizItem,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data Quiz Item dihapus",
            data: quizItem,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllQuizItem,
    getQuizItemById,
    createQuizItem,
    updateQuizItem,
    deleteQuizItem,
};
