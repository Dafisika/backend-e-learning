import prisma from "../../lib/prismaClient.js";

export const getAllTutor = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const tutor = await prisma.tutor.findMany();

        if (!tutor) {
            return res.status(404).json({
                code: 404,
                message: "Data tutor tidak ditemukan",
                data: tutor,
            });
        }
        return res
            .status(200)
            .json({ code: 200, message: "Data tutor ditemukan", data: tutor });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: tutor,
        });
    }
};

export const getTutorById = async (req, res) => {
    try {
        const id = req.params.tutorId;
        console.log("endpoint terpanggil");
        const tutor = await prisma.tutor.findUnique({
            where: { id },
        });

        return res.status(200).json(tutor);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const createTutor = async (req, res) => {
    try {
        const { name, position, company, experience } = req.body;
        const avatar = req.file ? req.file.filename : null;

        const tutor = await prisma.tutor.create({
            data: { avatar, name, position, company, experience },
        });
        res.status(201).json(tutor);
    } catch (err) {
        res.status(500).json({ error: "Terjadi Kesalahan " + err.message });
    }
};

export const updateTutor = async (req, res) => {
    try {
        const id = req.params.tutorId;
        const { avatar, name, position, company, experience } = req.body;
        console.log("endpoint terpanggil");
        const tutor = await prisma.tutor.update({
            where: { id },
            data: { avatar, name, position, company, experience },
        });

        return res.status(200).json(tutor);
    } catch (err) {
        return res
            .status(500)
            .json({ error: "terjadi kesalahan " + err.message });
    }
};

export const deleteTutor = async (req, res) => {
    try {
        const id = req.params.tutorId;
        console.log("endpoint terpanggil");
        const tutor = await prisma.tutor.delete({
            where: { id },
        });

        return res.status(200).json({ message: "Tutor dihapus", data: tutor });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllTutor,
    getTutorById,
    createTutor,
    updateTutor,
    deleteTutor,
};
