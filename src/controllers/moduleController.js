import prisma from "../../lib/prismaClient.js";

export const getAllModule = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const module = await prisma.module.findMany();

        if (!module) {
            return res.status(404).json({
                code: 404,
                message: "Data module tidak ditemukan",
                data: module,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data module ditemukan",
            data: module,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: module,
        });
    }
};

export const getModuleById = async (req, res) => {
    try {
        const id = req.params.moduleId;
        console.log("endpoint terpanggil");

        const module = await prisma.module.findUnique({
            where: { id },
        });

        if (!module) {
            return res.status(404).json({
                code: 404,
                message: "Data module tidak ditemukan",
                data: module,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data module ditemukan",
            data: module,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createModule = async (req, res) => {
    try {
        const { name, type, note, number, classId } = req.body;

        const module = await prisma.module.create({
            data: { name, type, note, number, classId },
        });

        if (!module) {
            return res.status(404).json({
                code: 404,
                message: "Data module tidak ditemukan",
                data: module,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data module ditemukan",
            data: module,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateModule = async (req, res) => {
    try {
        const id = req.params.moduleId;
        const { name, type, note, number, classId } = req.body;
        console.log("endpoint terpanggil");

        const module = await prisma.module.update({
            where: { id },
            data: { name, type, note, number, classId },
        });

        if (!module) {
            return res.status(404).json({
                code: 404,
                message: "Data module tidak ditemukan",
                data: module,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data module diperbaharui",
            data: module,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteModule = async (req, res) => {
    try {
        const id = req.params.moduleId;
        console.log("endpoint terpanggil");

        const module = await prisma.module.delete({
            where: { id },
        });

        if (!module) {
            return res.status(404).json({
                code: 404,
                message: "Data module tidak ditemukan",
                data: module,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data module dihapus",
            data: module,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllModule,
    getModuleById,
    createModule,
    updateModule,
    deleteModule,
};
