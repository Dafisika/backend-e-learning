import jwt from "jsonwebtoken";
import prisma from "../../lib/prismaClient.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import sendEmail from "../../lib/sendEmails.js";
dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: { email: email },
        });
        const secretKey = process.env.JWT_SECRET;

        if (user.isActive != true) {
            res.status(400).json({
                error: "Login gagal, akun sudah tidak aktif!",
            });
        } else if (!user) {
            res.status(400).json({
                error: "Login gagal, silahkan periksa kembali!",
            });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        const payload = {
            userId: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
        };

        const token = jwt.sign(payload, secretKey, {
            expiresIn: "1000m",
        });

        if (!comparePassword) {
            res.status(400).json({
                message: "Login gagal, silahkan periksa kembali!",
            });
        }

        res.status(200).json({
            message: "Login berhasil",
            token: token,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};
export const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                password: hashedPassword,
                verifyToken: uuidv4(),
            },
        });

        const verificationLink = `${process.env.BASE_URL}/auth/verify/${user.verifyToken}`;

        const link = await sendEmail(
            email,
            "Verifikasi Email",
            verificationLink,
        );

        if (!user) {
            return res.status(404).json({
                code: 404,
                message: "Data User gagal ditambahkan",
                data: link,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data User ditambahkan",
            data: user,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};
export const verifiedEmail = async (req, res) => {
    try {
        const token = req.params.token;
        const getUser = await prisma.user.findFirst({
            where: { verifyToken: token },
        });

        if (getUser.isActive == true) {
            return res.status(400).json({
                code: 400,
                message: "User sudah terverifikasi",
            });
        } else if (getUser.verifyToken != token || !getUser.verifyToken) {
            return res.status(400).json({
                code: 400,
                message: "Token tidak valid",
            });
        }

        const updatedUser = await prisma.user.update({
            where: { id: getUser.id },
            data: {
                isActive: true,
            },
        });

        return res.status(200).json({
            code: 200,
            message: "Verifikasi berhasil",
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};
export default { login, register, verifiedEmail };
