import prisma from "../../lib/prismaClient.js";

export const getAllMyClass = async (req, res) => {
    const { search } = req.query;

    const whereSearch = {};
    if (search) {
        whereSearch.OR = [
            { title: { contains: search } },
            { description: { contains: search } },
        ];
    }

    try {
        console.log("endpoint terpanggil");
        const myClass = await prisma.my_Class.findMany();

        if (!myClass) {
            return res.status(404).json({
                code: 404,
                message: "Data Kelas saya tidak ditemukan",
                data: myClass,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kelas saya ditemukan",
            data: myClass,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: myClass,
        });
    }
};

export const getMyClassById = async (req, res) => {
    try {
        const id = req.params.my_Class;
        console.log("endpoint terpanggil");
        const myClass = await prisma.my_Class.findUnique({
            where: { id },
        });

        if (!myClass) {
            return res.status(404).json({
                code: 404,
                message: "Data kelas saya tidak ditemukan",
                data: myClass,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kelas saya berhasil ditambahkan",
            data: myClass,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createMyClass = async (req, res) => {
    try {
        const { status, progress, totalModule, totalTime, userId, ClassId } =
            req.body;

        const myClass = await prisma.my_Class.create({
            data: { status, progress, totalModule, totalTime, userId, ClassId },
        });

        if (!myClass) {
            return res.status(404).json({
                code: 404,
                message: "Data Kelas saya tidak ditemukan",
                data: myClass,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kelas saya ditemukan",
            data: myClass,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};

export const updateMyClass = async (req, res) => {
    try {
        const id = req.params.my_Class;
        const { status, progress, totalModule, totalTime, userId, ClassId } =
            req.body;
        console.log("endpoint terpanggil");
        const myClass = await prisma.my_Class.update({
            where: { id },
            data: { status, progress, totalModule, totalTime, userId, ClassId },
        });

        if (!myClass) {
            return res.status(404).json({
                code: 404,
                message: "Data Kelas saya tidak ditemukan",
                data: myClass,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kelas saya ditemukan",
            data: myClass,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const deleteMyClass = async (req, res) => {
    try {
        const id = req.params.myClass;
        console.log("endpoint terpanggil");
        const myClass = await prisma.my_Class.delete({
            where: { id },
        });

        if (!myClass) {
            return res.status(404).json({
                code: 404,
                message: "Data Kelas saya tidak ditemukan",
                data: myClass,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data kelas saya dihapus",
            data: myClass,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllMyClass,
    getMyClassById,
    createMyClass,
    updateMyClass,
    deleteMyClass,
};
