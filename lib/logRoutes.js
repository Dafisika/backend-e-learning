import listEndpoints from "express-list-endpoints";

const logRoutes = (app) => {
    // Di Express 5, kita perlu memastikan router sudah diinisialisasi
    // atau menggunakan library eksternal yang sudah diupdate
    try {
        const endpoints = listEndpoints(app);
        const routes = endpoints.map((endpoint) => ({
            Method: endpoint.methods.join(", ").toUpperCase(),
            Path: endpoint.path,
        }));

        if (routes.length === 0) {
            console.log("ℹ️ Belum ada rute yang terdeteksi.");
        } else {
            console.table(routes);
        }
    } catch (error) {
        console.log("⚠️ Gagal memuat daftar rute:", error.message);
    }
};

export default logRoutes;
