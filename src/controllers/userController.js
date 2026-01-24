import prisma from "../../lib/prismaClient.js";

export const getAllUsers = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const users = await prisma.user.findMany();

        return res.status(200).json(users);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};
export const getUserById = async (req, res) => {
    try {
        const id = req.params.userId;
        console.log("endpoint terpanggil");
        const user = await prisma.user.findUnique({
            where: { id },
        });

        return res.status(200).json(user);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const user = await prisma.user.create({
            data: { name, email, phone, password },
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const { name, email, phone, password } = req.body;
        console.log("endpoint terpanggil");
        const user = await prisma.user.update({
            where: { id },
            data: { name, email, phone, password },
        });

        return res.status(200).json(user);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.userId;
        console.log("endpoint terpanggil");
        const user = await prisma.user.delete({
            where: { id },
        });

        return res.status(200).json({ message: "Akun dihapus", data: user });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
