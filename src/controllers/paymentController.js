import prisma from "../../lib/prismaClient.js";

export const getAllPayment = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const payment = await prisma.payment.findMany();

        if (!payment) {
            return res.status(404).json({
                code: 404,
                message: "Data payment tidak ditemukan",
                data: payment,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data payment ditemukan",
            data: payment,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: payment,
        });
    }
};

export const getPaymentById = async (req, res) => {
    try {
        const id = req.params.paymentId;
        console.log("endpoint terpanggil");
        const payment = await prisma.payment.findUnique({
            where: { id },
        });

        if (!payment) {
            return res.status(404).json({
                code: 404,
                message: "Data payment tidak ditemukan",
                data: payment,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data payment ditemukan",
            data: payment,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createPayment = async (req, res) => {
    try {
        const { totalPayment, totalPrice, userId } = req.body;

        const payment = await prisma.payment.create({
            data: { totalPayment, totalPrice, userId },
        });

        if (!payment) {
            return res.status(404).json({
                code: 404,
                message: "Data payment tidak ditemukan",
                data: payment,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data payment ditemukan",
            data: payment,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updatePayment = async (req, res) => {
    try {
        const id = req.params.paymentId;
        const { totalPayment, totalPrice, userId } = req.body;
        console.log("endpoint terpanggil");

        const payment = await prisma.payment.update({
            where: { id },
            data: { totalPayment, totalPrice, userId },
        });

        if (!payment) {
            return res.status(404).json({
                code: 404,
                message: "Data payment tidak ditemukan",
                data: payment,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data payment ditemukan",
            data: payment,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deletePayment = async (req, res) => {
    try {
        const id = req.params.paymentId;
        console.log("endpoint terpanggil");

        const payment = await prisma.payment.delete({
            where: { id },
        });

        if (!payment) {
            return res.status(404).json({
                code: 404,
                message: "Data payment tidak ditemukan",
                data: payment,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data payment ditemukan",
            data: payment,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllPayment,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
};
