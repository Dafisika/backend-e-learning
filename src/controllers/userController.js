import prisma from "../../lib/prismaClient.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        return res.status(200).json(users);
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

export default {
    getAllUsers,
    createUser,
};
