import prisma from "../../lib/prismaClient.js";

export const getAllOrder = async (req, res) => {
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
        console.log("endpoint terpanggil");
        const order = await prisma.order.findMany();

        if (!order) {
            return res.status(404).json({
                code: 404,
                message: "Data order tidak ditemukan",
                data: order,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data order ditemukan",
            data: order,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: order,
        });
    }
};

export const getOrderById = async (req, res) => {
    try {
        const id = req.params.orderId;
        console.log("endpoint terpanggil");

        const order = await prisma.order.findUnique({
            where: { id },
        });

        if (!order) {
            return res.status(404).json({
                code: 404,
                message: "Data order tidak ditemukan",
                data: order,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data order ditemukan",
            data: order,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { price, paymentId, classId } = req.body;

        const order = await prisma.order.create({
            data: { price, paymentId, classId },
        });

        if (!order) {
            return res.status(404).json({
                code: 404,
                message: "Data order tidak ditemukan",
                data: order,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data order ditemukan",
            data: order,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const { price, paymentId, classId } = req.body;
        console.log("endpoint terpanggil");

        const order = await prisma.order.update({
            where: { id },
            data: { price, paymentId, classId },
        });

        if (!order) {
            return res.status(404).json({
                code: 404,
                message: "Data order tidak ditemukan",
                data: order,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data order ditemukan",
            data: order,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        console.log("endpoint terpanggil");

        const order = await prisma.order.delete({
            where: { id },
        });

        if (!order) {
            return res.status(404).json({
                code: 404,
                message: "Data order tidak ditemukan",
                data: order,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data order ditemukan",
            data: order,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
