import prisma from "../../lib/prismaClient.js";

export const getAllVideo = async (req, res) => {
    try {
        console.log("endpoint terpanggil");
        const video = await prisma.video.findMany();

        if (!video) {
            return res.status(404).json({
                code: 404,
                message: "Data video tidak ditemukan",
                data: video,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data video ditemukan",
            data: video,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: "Terjadi kesalahan " + err.message,
            data: video,
        });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const id = req.params.videoId;
        console.log("endpoint terpanggil");

        const video = await prisma.video.findUnique({
            where: { id },
        });

        if (!video) {
            return res.status(404).json({
                code: 404,
                message: "Data video tidak ditemukan",
                data: video,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data video ditemukan",
            data: video,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const createVideo = async (req, res) => {
    try {
        const { name, description, moduleId } = req.body;
        const video_url = req.file ? req.file.filename : null;

        const video = await prisma.video.create({
            data: { name, video_url, description, moduleId },
        });

        if (!video) {
            return res.status(404).json({
                code: 404,
                message: "Data video tidak ditemukan",
                data: video,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data video ditemukan",
            data: video,
        });
    } catch (err) {
        res.status(500).json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const updateVideo = async (req, res) => {
    try {
        const id = req.params.videoId;
        const { name, video_url, description, moduleId } = req.body;
        console.log("endpoint terpanggil");

        const video = await prisma.video.update({
            where: { id },
            data: { name, video_url, description, moduleId },
        });

        if (!video) {
            return res.status(404).json({
                code: 404,
                message: "Data video tidak ditemukan",
                data: video,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data video ditemukan",
            data: video,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export const deleteVideo = async (req, res) => {
    try {
        const id = req.params.videoId;
        console.log("endpoint terpanggil");

        const video = await prisma.video.delete({
            where: { id },
        });

        if (!video) {
            return res.status(404).json({
                code: 404,
                message: "Data video tidak ditemukan",
                data: video,
            });
        }
        return res.status(200).json({
            code: 200,
            message: "Data video ditemukan",
            data: video,
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Terjadi kesalahan " + err.message });
    }
};

export default {
    getAllVideo,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
};
