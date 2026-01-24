import prisma from "../../lib/prismaClient.js";

export const getAllCategoryClass = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const category_Class = await prisma.category_Class.findMany();

        if (!category_Class) {
            return res.status(404).json({
                code: 404,
                message: "Kategori kelas tidak ditemukan",
                data: category_Class,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kategori kelas ditemukan",
            data: category_Class,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: category_Class,
        });
    }
};

export const getCategoryClassById = async (req, res) => {
    try {
        const id = req.params.categoryClassId;
        console.log("endpoint terpanggil");
        const category_Class = await prisma.category_Class.findUnique({
            where: { id },
        });

        return res.status(200).json(category_Class);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createCategoryClass = async (req, res) => {
    try {
        const { name } = req.body;

        const category_Class = await prisma.category_Class.create({
            data: { name },
        });
        res.status(201).json(category_Class);
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};

export const updateCategoryClass = async (req, res) => {
    try {
        const id = req.params.categoryClassId;
        const { name } = req.body;
        console.log("endpoint terpanggil");
        const category_Class = await prisma.category_Class.update({
            where: { id },
            data: { name },
        });

        return res.status(200).json(category_Class);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const deleteCategoryClass = async (req, res) => {
    try {
        const id = req.params.categoryClassId;
        console.log("endpoint terpanggil");
        const category_Class = await prisma.category_Class.delete({
            where: { id },
        });

        return res.status(200).json({
            message: "Data kategori kelas dihapus",
            data: category_Class,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllCategoryClass,
    getCategoryClassById,
    createCategoryClass,
    updateCategoryClass,
    deleteCategoryClass,
};
