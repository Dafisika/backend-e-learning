import prisma from "../../lib/prismaClient.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: { email: email },
        });

        if (!user) {
            res.status(400).json({ error: "Email tidak ditemukan" });
        }

        if (user.password === password) {
            res.status(201).json({ message: "Login berhasil", data: user });
        }

        res.status(400).json({ error: "Email atau password salah" });
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};
export default { login };
