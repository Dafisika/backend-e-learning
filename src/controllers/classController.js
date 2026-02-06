import { response } from "express";
import prisma from "../../lib/prismaClient.js";

export const getAllClass = async (req, res) => {
    const { search, category } = req.query;

    const whereSearch = {};
    const whereCategory = {};
    if (search) {
        whereSearch.OR = [
            { title: { contains: search } },
            { description: { contains: search } },
        ];
    }

    if (category) {
        whereCategory.categoryClassId = category;
    }

    try {
        const classProduct = await prisma.class.findMany({
            where: {
                OR: [whereSearch, whereCategory],
            },
            orderBy: {
                title: "asc",
            },
            include: {
                categoryClass: true,
            },
        });

        if (!classProduct) {
            return res.status(404).json({
                code: 404,
                message: "Data class tidak ditemukan",
                data: [],
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data class ditemukan",
            data: classProduct,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: [],
        });
    }
};

export const getClassById = async (req, res) => {
    try {
        const id = req.params.classId;
        console.log("endpoint terpanggil");
        const classProduct = await prisma.class.findUnique({
            where: { id },
        });

        if (!classProduct) {
            return res.status(404).json({
                code: 404,
                message: "Data class tidak ditemukan",
                data: classProduct,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data class ditemukan",
            data: classProduct,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createClass = async (req, res) => {
    try {
        const { title, description, tutorId, categoryClassId } = req.body;
        const image = req.file ? req.file.filename : null;

        const classProduct = await prisma.class.create({
            data: {
                title,
                image,
                description,
                tutorId,
                categoryClassId,
            },
        });

        if (!classProduct) {
            return res.status(404).json({
                code: 404,
                message: "Data class tidak ditemukan",
                data: classProduct,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data class berhasil ditambahkan",
            data: classProduct,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};

export const updateClass = async (req, res) => {
    try {
        const id = req.params.classId;
        const { title, image, description, tutorId, categoryClassId } =
            req.body;
        console.log("endpoint terpanggil");

        const classProduct = await prisma.class.update({
            where: { id },
            data: { title, image, description, tutorId, categoryClassId },
        });

        if (!classProduct) {
            return res.status(404).json({
                code: 404,
                message: "Data class tidak ditemukan",
                data: classProduct,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data class berhasil diperbaharui",
            data: classProduct,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteClass = async (req, res) => {
    try {
        const id = req.params.classId;
        console.log("endpoint terpanggil");
        const classProduct = await prisma.class.delete({
            where: { id },
        });

        if (!classProduct) {
            return res.status(404).json({
                code: 404,
                message: "Data class tidak ditemukan",
                data: classProduct,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data class berhasil dihapus",
            data: classProduct,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllClass,
    getClassById,
    createClass,
    updateClass,
    deleteClass,
};
