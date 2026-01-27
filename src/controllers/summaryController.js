import prisma from "../../lib/prismaClient.js";

export const getAllSummary = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const summary = await prisma.summary.findMany();

        if (!summary) {
            return res.status(404).json({
                code: 404,
                message: "Data summary tidak ditemukan",
                data: summary,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data summary ditemukan",
            data: summary,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: summary,
        });
    }
};

export const getSummaryById = async (req, res) => {
    try {
        const id = req.params.summaryId;
        console.log("endpoint terpanggil");

        const summary = await prisma.summary.findUnique({
            where: { id },
        });

        if (!summary) {
            return res.status(404).json({
                code: 404,
                message: "Data summary tidak ditemukan",
                data: summary,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data summary ditemukan",
            data: summary,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createSummary = async (req, res) => {
    try {
        const { title, content, moduleId } = req.body;

        const summary = await prisma.summary.create({
            data: { title, content, moduleId },
        });

        if (!summary) {
            return res.status(404).json({
                code: 404,
                message: "Data summary tidak ditemukan",
                data: summary,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data summary ditambahkan",
            data: summary,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateSummary = async (req, res) => {
    try {
        const id = req.params.summaryId;
        const { title, content, moduleId } = req.body;
        console.log("endpoint terpanggil");

        const summary = await prisma.summary.update({
            where: { id },
            data: { title, content, moduleId },
        });

        if (!summary) {
            return res.status(404).json({
                code: 404,
                message: "Data summary tidak ditemukan",
                data: summary,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data summary diperbaharui",
            data: summary,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteSummary = async (req, res) => {
    try {
        const id = req.params.summaryId;
        console.log("endpoint terpanggil");

        const summary = await prisma.summary.delete({
            where: { id },
        });

        if (!summary) {
            return res.status(404).json({
                code: 404,
                message: "Data summary tidak ditemukan",
                data: summary,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data summary dihapus",
            data: summary,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllSummary,
    getSummaryById,
    createSummary,
    updateSummary,
    deleteSummary,
};
